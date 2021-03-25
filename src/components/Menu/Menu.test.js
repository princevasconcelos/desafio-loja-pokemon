import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

import * as U from 'tests/utils'
import Menu from './index'

describe('<Menu />', () => {
  test(`should redirect to "/tipo/:name" when user clicks on menu item`, () => {
    const history = createMemoryHistory()
    U.renderWithProviders({
      component: <Menu />,
      history,
    })

    const [
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
  })
})
