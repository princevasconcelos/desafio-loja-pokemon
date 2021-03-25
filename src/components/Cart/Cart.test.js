import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CartMock from 'tests/mocks/cart'
import PokemonsMock from 'tests/mocks/pokemons'
import * as U from 'tests/utils'

import Cart from './index'

describe('<Cart />', () => {
  test(`should not render if cart is empty`, () => {
    U.renderWithThemeAndContext({
      component: <Cart />,
      value: {
        cart: {},
      },
    })

    expect(screen.queryByText('Resumo do pedido')).toBeNull()
  })

  test(`should display pokemon name/image/price and cart total`, () => {
    U.renderWithThemeAndContext({
      component: <Cart />,
      value: {
        cart: CartMock,
      },
    })

    const pokemons = ['pikachu', 'charmander', 'bulbasaur', 'squirtle']

    pokemons.forEach(p => {
      expect(screen.getByText(p)).toBeVisible()
      expect(
        screen.getByRole('img', {
          name: `A front ${p} pokemon`,
        })
      ).toBeVisible()
    })

    const prices = ['R$ 420', 'R$ 350', 'R$ 210', 'R$ 115']
    prices.forEach(p => expect(screen.getByText(p)).toBeVisible())

    const texts = ['Resumo do pedido', 'Total', 'R$ 1,095']
    texts.forEach(t => expect(screen.getByText(t)).toBeVisible())
  })

  test(`should recalculate price when user add/remove pokemons to cart`, async () => {
     U.renderWithThemeAndContext({
      component: <Cart />,
      value: {
        cart: CartMock,
        pokemons: PokemonsMock,
      },
    })

    userEvent.click(
      screen.getAllByRole('button', {
        name: '+',
      })[0]
    )

    await waitFor(() => {
      expect(screen.getByText('R$ 1,095')).toBeVisible()
    })
  })
})
