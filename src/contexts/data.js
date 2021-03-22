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
      case 'UPDATE_CART': {
        const {
          quantity,
          pokemon: {
            name,
            weight
          }
        } = payload

        return {
            ...state,
            cart: {
              ...state.cart,
              [name]: {
                quantity: state.cart[name]
                  ? state.cart[name].quantity + quantity 
                  : quantity,
                price: weight,
              }
            }
        }
      }
      case 'REMOVE_FROM_CART': {
        const newState = {...state}
        delete newState.cart[payload.name]
        return newState
      }
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
      case 'BUY_POKEMON': {
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

    const updateCart = payload => dispatch({
        type: 'UPDATE_CART',
        payload
    })

    const savePokemonData = payload => dispatch({
      type: 'SAVE_POKEMON_DATA',
      payload
    })

    const removePokemon = payload => dispatch({
      type: 'REMOVE_FROM_CART',
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
      type: 'BUY_POKEMON',
      payload
    })

    return <DataContext.Provider value={{
      ...state,
      updateCart,
      savePokemonData,
      removePokemon,
      saveEndpointResult,
      changeTheme,
      buyPokemon,
      ...value
  }}>{children}</DataContext.Provider>
  }

export default DataContext