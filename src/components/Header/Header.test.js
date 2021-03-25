import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

import CartMock from 'tests/mocks/cart'
import * as U from 'tests/utils'
import Header from './index'

describe('<Header />', () => {
  test(`should display the amount of pokemons added to cart`, () => {
    U.renderWithProviders({
      component: <Header />,
      value: {
        cart: CartMock,
      },
    })

    expect(
      screen.getByRole('button', {
        name: Object.keys(CartMock).length,
      })
    ).toBeVisible()
  })
})
