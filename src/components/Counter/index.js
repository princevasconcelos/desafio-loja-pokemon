import React from 'react'
import styled from 'styled-components'

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin-top: 4px;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`

const ButtonsContainer = styled.div`
  border: 2px solid #333;
  border-radius: 3px;
  min-width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-size: 24px;
    line-height: 30px;
  }

  i {
    cursor: default;
    font-size: 16px;
    text-align: center;
    font-style: normal;
  }

  * {
    flex: 1;
  }
`

export default ({ value, onIncrease, onDecrease, onClean, id }) => (
  <Counter id={id}>
    <ButtonsContainer>
      <button disabled={value === 99} onClick={onIncrease}>
        +
      </button>
      <i>{value}</i>
      <button disabled={value === 1} onClick={onDecrease}>
        -
      </button>
    </ButtonsContainer>
    <button onClick={onClean}>remover</button>
  </Counter>
)
