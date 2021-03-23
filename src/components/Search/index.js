import React from 'react'
import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 16px;

  input {
    width: 100%;
    max-width: 600px;
    padding: 16px;
    background: #eee;
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 10px;
    color: #333;

    ::-webkit-input-placeholder {
      color: #333;
    }
  }
`

export default function Search({ placeholder, onSubmit }) {
  return (
    <Container onSubmit={onSubmit}>
      <input placeholder={placeholder} type="text" />
    </Container>
  )
}
