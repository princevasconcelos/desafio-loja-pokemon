import React, {useReducer} from 'react'

const INITIAL_STATE = {
    cart: {},
    pokemons: {},
    // search: {},
    endpoints: {},
    theme: 'meupiru'
}

const DataContext = React.createContext()

function dataReducer(state, { type, payload }) {
    switch (type) {
      case 'SAVE_ENDPOINT_RESULT': {
        const {url, result} = payload
        return {
          ...state,
          endpoints: {
            ...state.endpoints,
            [url]: result
          }
        }
      }
      case 'SAVE_POKEMON_DATA': {
        return {
            ...state,
            pokemons: {
              ...state.pokemons,
              ...payload
            }
        }
      }
      case 'ADD_POKEMON_TO_CART': {
        const { name, weight } = state.pokemons[payload]

        return {
          ...state,
          cart: {
            ...state.cart,
            [name]: {
              quantity: state.cart[name]
                ? state.cart[name].quantity + 1 
                : 1,
              price: weight,
            }
          }
        }
      }
      case 'REMOVE_POKEMON_FROM_CART': {
        return {
          ...state,
          cart: {
            ...state.cart,
            [payload]: {
              ...state.cart[payload],
              quantity: state.cart[payload].quantity - 1
            }
          }
        }
      }
      case 'CLEAN_POKEMON_FROM_CART': {
        const newState = {...state}
        delete newState.cart[payload]
        return newState
      }
      case 'CHANGE_THEME': {
        return {
            ...state,
            theme: payload
        }
      }
      default: {
        throw new Error(`Unhandled action type: ${type}`)
      }
    }
}

export function DataProvider ({ children, value }) {
    const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE)

    const savePokemonData = payload => dispatch({
      type: 'SAVE_POKEMON_DATA',
      payload
    })

    const saveEndpointResult = payload => dispatch({
      type: 'SAVE_ENDPOINT_RESULT',
      payload
    })

    const changeTheme = payload => dispatch({
      type: 'CHANGE_THEME',
      payload
    })

    const buyPokemon = payload => dispatch({
      type: 'ADD_POKEMON_TO_CART',
      payload
    })

    const removePokemon = payload => dispatch({
      type: 'REMOVE_POKEMON_FROM_CART',
      payload
    })

    const cleanPokemon = payload => dispatch({
      type: 'CLEAN_POKEMON_FROM_CART',
      payload
    })

    return <DataContext.Provider value={{
      ...state,
      savePokemonData,
      saveEndpointResult,
      changeTheme,
      buyPokemon,
      removePokemon,
      cleanPokemon,
      ...value
  }}>{children}</DataContext.Provider>
  }

export default DataContext