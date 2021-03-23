import React, { useReducer, useEffect } from 'react'

const INITIAL_STATE = {
  cart: {},
  pokemons: {},
  endpoints: {},
  theme: 'normal',
}

const DataContext = React.createContext()

function dataReducer(state, { type, payload }) {
  switch (type) {
    case 'SAVE_ENDPOINT_RESULT': {
      const { url, result } = payload
      return {
        ...state,
        endpoints: {
          ...state.endpoints,
          [url]: result,
        },
      }
    }
    case 'SAVE_POKEMON_DATA': {
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          ...payload,
        },
      }
    }
    case 'ADD_POKEMON_TO_CART': {
      const { name, weight } = state.pokemons[payload]

      return {
        ...state,
        cart: {
          ...state.cart,
          [name]: {
            quantity: state.cart[name] ? state.cart[name].quantity + 1 : 1,
            price: weight,
          },
        },
      }
    }
    case 'REMOVE_POKEMON_FROM_CART': {
      return {
        ...state,
        cart: {
          ...state.cart,
          [payload]: {
            ...state.cart[payload],
            quantity: state.cart[payload].quantity - 1,
          },
        },
      }
    }
    case 'CLEAN_POKEMON_FROM_CART': {
      const cartCopy = { ...state.cart }
      delete cartCopy[payload]
      return {
        ...state,
        cart: {
          ...cartCopy,
        },
      }
    }
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`)
    }
  }
}

export function DataProvider({ children, overwrite }) {
  const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    localStorage.setItem('theme', state.theme)
  }, [state.theme])

  const savePokemonData = payload =>
    dispatch({
      type: 'SAVE_POKEMON_DATA',
      payload,
    })

  const saveEndpointResult = payload =>
    dispatch({
      type: 'SAVE_ENDPOINT_RESULT',
      payload,
    })

  const changeTheme = payload =>
    dispatch({
      type: 'CHANGE_THEME',
      payload,
    })

  const buyPokemon = payload =>
    dispatch({
      type: 'ADD_POKEMON_TO_CART',
      payload,
    })

  const removePokemon = payload =>
    dispatch({
      type: 'REMOVE_POKEMON_FROM_CART',
      payload,
    })

  const cleanPokemon = payload =>
    dispatch({
      type: 'CLEAN_POKEMON_FROM_CART',
      payload,
    })

  return (
    <DataContext.Provider
      value={{
        ...state,
        savePokemonData,
        saveEndpointResult,
        changeTheme,
        buyPokemon,
        removePokemon,
        cleanPokemon,
        ...overwrite,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
