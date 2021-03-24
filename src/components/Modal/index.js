import React from 'react'

import { GrClose } from "react-icons/gr";

import * as S from './styles'

export default ({ handleClose, title, isVisible, children }) => (
  <S.Modal isVisible={isVisible} >
    <S.ModalContent>
        <S.ModalHeader>
            <span>{title}</span>
            <GrClose onClick={handleClose} />
        </S.ModalHeader> 
      <S.ModalBody>{children}</S.ModalBody>
    </S.ModalContent>
  </S.Modal>
)
