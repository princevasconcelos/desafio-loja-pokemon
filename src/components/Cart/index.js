import React, {useContext} from 'react'

import Button from 'components/Button'
import Counter from 'components/Counter'
import DataContext from 'contexts/data'

import * as H from 'utils/helpers'
import * as S from './styles'

export default () => {
    const { cart, pokemons, updateCart, removePokemon } = useContext(DataContext)
    const hasValues = Object.entries(cart)
    let total = 0

    // const pokemon = data.find(({ name }) => name === targetName)
    //     if (!pokemon) return

    //     updateCart({
    //         quantity: 1,
    //         pokemon
    //     })


    const findPokemonData = $clickedElement => {
        const pokeName = $clickedElement.parentElement.parentElement.parentElement
            .querySelector('span').innerText.toLowerCase()
        if (!pokeName) return ''
        return pokemons[pokeName]
    }

    const handleIncrease = ({ target }) => updateCart({
        quantity: 1,
        pokemon: findPokemonData(target)
    })
    const handleDecrease = ({ target }) => updateCart({
        quantity: -1,
        pokemon: findPokemonData(target)
    })

    const handleClean = ({ target }) => removePokemon(findPokemonData(target))

    if (hasValues.length === 0) return <></>

    return (
        <S.Cart>
            <span>Resumo do pedido</span>
            <ul>
                {hasValues.length > 0 && hasValues.map(([name, pokemon]) => {
                    const itemPrice = pokemon.price * pokemon.quantity
                    total += itemPrice

                    return (
                        <S.CartItem key={name}>
                            <S.CounterContainer>
                                <Counter
                                    value={pokemon.quantity}
                                    onClean={handleClean}
                                    onIncrease={handleIncrease}
                                    onDecrease={handleDecrease} /> 
                                <span>{name}</span>
                            </S.CounterContainer>
                            <span>R$ {H.priceFormat(itemPrice)}</span>
                        </S.CartItem>
                    )
                })}
            </ul>
            <S.Amount>
                <span>Total</span>
                <span>R$ {H.priceFormat(total)}</span>
            </S.Amount>
            <Button>Finalizar</Button>
        </S.Cart>
    )
}