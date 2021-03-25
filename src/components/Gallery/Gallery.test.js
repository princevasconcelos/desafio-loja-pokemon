import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'

import * as U from 'tests/utils'

import { PokemonsMockList } from 'tests/mocks/pokemons'
import Gallery from './index'

describe('<Gallery />', () => {
  test(`should display a spinner when loading is true`, () => {
    render(<Gallery data={[]} loading />)

    expect(screen.getByRole('status')).toBeVisible()
  })

  test(`should display a empty message when data is empty`, () => {
    render(<Gallery data={[]} loading={false} />)

    expect(screen.getByText('Nenhum resultado encontrado')).toBeVisible()
  })

  test(`should display a list of pokemons when data is provided`, () => {
    U.renderWithProviders({
      component: <Gallery data={PokemonsMockList} loading={false} />,
    })

    const pokemons = [
      { name: 'pikachu', id: 25 },
      { name: 'charmander', id: 4 },
      { name: 'bulbasaur', id: 1 },
      { name: 'squirtle', id: 7 },
    ]

    pokemons.forEach(({ name, id }) => {
      const alt = `The front side of ${name}`
      expect(screen.getByText(name)).toBeVisible()
      expect(
        screen.getByRole('img', {
          name: alt,
        })
      ).toBeVisible()
      expect(screen.getByAltText(alt)).toHaveProperty(
        'src',
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      )
    })
  })

  test(`should display a loading image placeholder if image is not provided`, () => {
    const data = PokemonsMockList.map(d => ({ ...d, sprites: null }))

    U.renderWithProviders({
      component: <Gallery data={data} loading={false} />,
    })

    expect(screen.getAllByRole('status').length).toBe(4)
  })

  test(`should navigate to "/pokemon/:name" when click on a pokemon item`, () => {
    const history = createMemoryHistory()
    U.renderWithProviders({
      component: <Gallery data={PokemonsMockList} loading={false} />,
      history,
    })

    userEvent.click(
      screen.getByRole('link', {
        name: 'The front side of pikachu pikachu R$ 60',
      })
    )

    expect(history.location.pathname).toBe('/pokemon/pikachu')
  })
})
