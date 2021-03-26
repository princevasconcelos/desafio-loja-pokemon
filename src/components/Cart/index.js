import React, { useState, useContext } from 'react'
import { GrClose } from 'react-icons/gr'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import Counter from 'components/Counter'
import DataContext from 'contexts/data'
import Modal from 'components/Modal'

import * as H from 'utils/helpers'
import * as S from './styles'

export default ({ isVisible = true, handleCloseClick }) => {
  const history = useHistory()
  const [isFinishModalVisible, setFinishModal] = useState(false)
  const {
    cart,
    buyPokemon,
    removePokemon,
    cleanPokemon,
    cleanCart,
    changeTheme
  } = useContext(DataContext)
  const hasValues = Object.entries(cart)
  let total = 0

  const handleIncrease = name => buyPokemon(name)
  const handleDecrease = name => removePokemon(name)
  const handleClean = name => cleanPokemon(name)
  const handleOrderButton = () => setFinishModal(true)
  const closeModal = () => {
    setFinishModal(false)
    cleanCart()
    history.push('/')
    changeTheme('normal')
  }

  if (hasValues.length === 0) return <></>

  return (
    <>
      <S.Cart id="cart" isVisible={isVisible}>
        <S.HeaderContainer>
          <strong>Resumo do pedido</strong>
          <GrClose onClick={handleCloseClick} size="16px" />
        </S.HeaderContainer>
        <ul>
          {hasValues.length > 0 &&
            hasValues.map(([name, information]) => {
              const itemPrice = information.price * information.quantity
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
                      src={information.image}
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
        <Button onClick={handleOrderButton}>Finalizar</Button>
      </S.Cart>

      <S.BlackWindow id="blackwindow" />

      <Modal
        isVisible={isFinishModalVisible}
        handleClose={closeModal}
        title="Obrigado!!!"
      >
        <p>
          Você ganhou <strong>R$ {H.priceFormat(total / 10)}</strong> de
          cashback
        </p>
      </Modal>
    </>
  )
}
