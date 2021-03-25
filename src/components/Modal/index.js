import React from 'react'
import { GrClose } from 'react-icons/gr'

import Button from 'components/Button'

import * as S from './styles'

export default ({ handleClose, title, isVisible, children }) => {
  if (!isVisible) return <></>

  return (
    <S.Modal isVisible={isVisible}>
      <S.ModalContent>
        <S.ModalHeader>
          <span>{title}</span>
          <button onClick={handleClose}>
            <GrClose />
          </button>
        </S.ModalHeader>
        <S.ModalBody>{children}</S.ModalBody>
        <S.ModalFooter>
          <Button onClick={handleClose}>Finalizar</Button>
        </S.ModalFooter>
      </S.ModalContent>
    </S.Modal>
  )
}
