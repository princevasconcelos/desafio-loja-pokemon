import React from 'react'

import { GrClose } from 'react-icons/gr'

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
      </S.ModalContent>
    </S.Modal>
  )
}
