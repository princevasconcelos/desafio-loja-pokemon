import styled, { css } from 'styled-components'

export const Cart = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 0;
  height: 100vh;
  max-height: 100vh;
  padding: 0;
  background: #f8f8f8;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  right: 0;
  z-index: 2;
  transition: all 0.2s;
  border-left: 1px solid lightgray;

  @media (max-width: 600px) {
    ${props => props.isVisible && css`
    width: 100%;
    padding: 16px;

    span,
      #counter,
      button {
        display: block;
      }
  
      > strong {
        text-align: left;
        font-size: 18px;
      }
  `}
  }

  @media (min-width: 600px) {
    width: 124px;
    padding: 16px;

    &:hover {
      width: 320px;
  
      span,
      #counter,
      button {
        display: block;
      }
  
      > strong {
        text-align: left;
        font-size: 18px;
      }
    }

    > strong {
      text-align: center;
      font-size: 14px;
    }
  
    span,
    #counter,
    button {
      display: none;
    }
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 600px) {
    svg {
      display: none;
    }
  }
`

export const BlackWindow = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: block;
    width: 0;
    height: 0;
    background: black;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transition: opacity 0.4s;
  }
`

export const Amount = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  font-weight: bold;
`

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }

  > div {
    display: flex;
  }

  > span {
    margin-top: 8px;
    white-space: nowrap;
  }
`

export const CounterContainer = styled.div`
  > span {
    text-transform: capitalize;
    margin-top: 8px;
    margin-left: 8px;
  }
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    text-transform: capitalize;
  }
`
