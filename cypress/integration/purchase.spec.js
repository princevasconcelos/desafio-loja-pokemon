describe('Purchase workflow', () => {
    beforeEach(() => {
        cy.viewport('iphone-xr')
        cy.visit('http://localhost:3000/#/')
        cy.wait(5000)
    })

    it('should succeed to buy', () => {
        expect(localStorage.getItem('cart')).to.eq('{}')
        expect(localStorage.getItem('theme')).to.eq('normal')

        expect(cy.get('ul').contains('bulbasaur'))
        expect(cy.get('ul').contains('charmander'))
        expect(cy.get('ul').contains('squirtle'))

        cy.get('[href="#/pokemon/bulbasaur"] ~ button').click()
        cy.get('[href="#/pokemon/charmander"] ~ button').click()
        cy.get('[href="#/pokemon/squirtle"] ~ button').click()

        expect(cy.get('header > div > button').contains('3'))
        
        cy.get('header > div > button').click()

        cy.wait(1000)

        expect(cy.get('#cart li').contains('bulbasaur'))
        expect(cy.get('#cart li').contains('charmander'))
        expect(cy.get('#cart li').contains('squirtle'))

        cy.get('#cart > div ~ button').click()

        cy.get('dialog').contains('Você ganhou R$ 24,4 de cashback')

        cy.wait(1000)

        cy.get('dialog button').click()
    })
})