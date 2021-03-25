import styled, { keyframes } from 'styled-components'

export const Modal = styled.div`
  background-color: #eee;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  h2 {
    color: black;
  }
`

const animatetop = keyframes`
  from { top: -300px; opacity: 0; }
  to { top: 10%; opacity: 1; }
`

export const ModalContent = styled.div`
  position: relative;
  background: white;
  margin: auto;
  padding: 16px;
  border: 1px solid #eee;
  width: 400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: ${animatetop};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
`

export const ModalHeader = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 12px;
  color: black;
  text-align: center;

  svg {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`

export const ModalBody = styled.div`
  padding: 12px;
  text-align: center;
  > * {
    margin: 8px 0;
  }
`

export const ModalFooter = styled.div`
  padding: 12px;
  color: white;
  text-align: center;
`
