import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import * as U from 'tests/utils'
import PokemonRequestMock, {
  onePokemonRequestMock,
} from 'tests/mocks/pokemonRequest'
import { bulbasaurMock } from 'tests/mocks/pokemons'
import API from 'service'

import Home from './index'

describe('<Home />', () => {
  test(`should render a loading when data is fetching`, () => {
    U.renderWithProviders({
      component: <Home />,
    })

    expect(screen.getByRole('status')).toBeVisible()
  })

  test(`should render only the pokemon names
    when API fetched the pokemons list but not their details`, async () => {
    jest
      .spyOn(API, 'get')
      .mockResolvedValueOnce(PokemonRequestMock)
      .mockResolvedValue(null)

    U.renderWithProviders({
      component: <Home />,
    })

    const pokemons = ['bulbasaur', 'charmeleon', 'wartortle']

    await waitFor(() => {
      pokemons.forEach(p => expect(screen.getByText(p)).toBeVisible())
      expect(screen.queryByText('R$')).toBeNull()
      expect(screen.queryByRole('image')).toBeNull()
    })
  })

  test(`should render the pokemon image and price
    when API succeed to fetch the information`, async () => {
    const saveEndpointResult = jest.fn()
    const savePokemonData = jest.fn()
    const buyPokemon = jest.fn()
    jest
      .spyOn(API, 'get')
      .mockResolvedValueOnce(onePokemonRequestMock)
      .mockResolvedValue(bulbasaurMock)

    U.renderWithProviders({
      component: <Home />,
      value: {
        buyPokemon,
        endpoints: {},
        saveEndpointResult,
        savePokemonData,
      },
    })

    await waitFor(() => {
      expect(screen.getByText('bulbasaur')).toBeVisible()
      expect(screen.queryByText('R$ 69')).toBeNull()
      expect(screen.queryByRole('img')).toBeNull()
    })

    await waitFor(() => {
      expect(screen.getByText('R$ 69')).toBeVisible()
      expect(
        screen.getByRole('img', {
          name: 'The front side of bulbasaur',
        })
      ).toHaveProperty(
        'src',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      )
    })

    expect(saveEndpointResult).toHaveBeenCalledTimes(1)
    expect(savePokemonData).toHaveBeenCalledTimes(1)

    userEvent.click(screen.getByRole('button'))

    expect(buyPokemon).toHaveBeenCalledTimes(1)
    expect(buyPokemon).toHaveBeenCalledWith('bulbasaur')
  })

  test(`should render the cached pokemon data
    when it was previously stored on context`, async () => {
    jest.spyOn(API, 'get').mockRejectedValue({})

    U.renderWithProviders({
      component: <Home />,
      value: {
        endpoints: {
          'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0': [
            bulbasaurMock,
          ],
        },
      },
    })

    await waitFor(() => {
      expect(screen.getByText('R$ 69')).toBeVisible()
      expect(
        screen.getByRole('img', {
          name: 'The front side of bulbasaur',
        })
      ).toHaveProperty(
        'src',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      )
    })
  })
})
