import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

import CartMock from 'tests/mocks/cart'
import * as U from 'tests/utils'
import { PokemonsMockList } from 'tests/mocks/pokemons'
import Header from './index'
import Menus from 'utils/constraints'

describe('<Header />', () => {
  test(`should redirect to "/tipo/:name" when user clicks on menu item`, () => {
    const history = createMemoryHistory()
    U.renderWithProviders({
      component: <Header />,
      history,
    })

    const [
      pokeLogo,
      fogo,
      agua,
      grama,
      eletrico,
      inseto,
      dragao,
      fantasma,
    ] = screen.getAllByRole('link')

    userEvent.click(fantasma)
    expect(history.location.pathname).toBe('/tipo/fantasma')

    userEvent.click(dragao)
    expect(history.location.pathname).toBe('/tipo/dragao')

    userEvent.click(inseto)
    expect(history.location.pathname).toBe('/tipo/inseto')

    userEvent.click(eletrico)
    expect(history.location.pathname).toBe('/tipo/eletrico')

    userEvent.click(grama)
    expect(history.location.pathname).toBe('/tipo/grama')

    userEvent.click(agua)
    expect(history.location.pathname).toBe('/tipo/agua')

    userEvent.click(fogo)
    expect(history.location.pathname).toBe('/tipo/fogo')

    userEvent.click(pokeLogo)
    expect(history.location.pathname).toBe('/')
  })

  test.only(`should redirect to "/tipo/:name" when user clicks on menu item`, () => {
    const { debug } = U.renderWithProviders({
      component: <Header />,
      value: {
        cart: CartMock,
      },
    })

    console.log('prince acabou')
    screen.getByRole('qwqwe')
  })
})
