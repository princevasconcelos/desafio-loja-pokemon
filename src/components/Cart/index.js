import React, { useContext } from 'react'

import Button from 'components/Button'
import Counter from 'components/Counter'
import DataContext from 'contexts/data'

import * as H from 'utils/helpers'
import * as S from './styles'

export default () => {
  const {
    cart,
    pokemons,
    buyPokemon,
    removePokemon,
    cleanPokemon,
  } = useContext(DataContext)
  const hasValues = Object.entries(cart)
  let total = 0

  const handleIncrease = name => buyPokemon(name)
  const handleDecrease = name => removePokemon(name)
  const handleClean = name => cleanPokemon(name)

  if (hasValues.length === 0) return <></>

  return (
    <>
      <S.Cart>
        <strong>Resumo do pedido</strong>
        <ul>
          {hasValues.length > 0 &&
            hasValues.map(([name, information]) => {
              const itemPrice = information.price * information.quantity
              const pokemon = pokemons[name]
              total += itemPrice

              return (
                <S.CartItem key={name}>
                  <S.CounterContainer>
                    <Counter
                      id="counter"
                      value={information.quantity}
                      onClean={() => handleClean(name)}
                      onIncrease={() => handleIncrease(name)}
                      onDecrease={() => handleDecrease(name)}
                    />
                  </S.CounterContainer>
                  <S.NameContainer>
                    <span>{name}</span>
                    <img
                      alt={`A front ${name} pokemon`}
                      src={pokemon.sprites.front_default}
                    />
                  </S.NameContainer>
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
      <S.BlackWindow id="blackwindow" />
    </>
  )
}
