import React from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'

const Container = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;

  input {
    width: 100%;
    padding: 16px 40px 16px 16px;
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

  button {
    position: absolute;
    padding: 2px 4px;
    opacity: 0.6;
    top: calc(50% - 15px);
    right: 8px;

    &:hover {
      opacity: 1;
    }
  }
`

export default function Search({ placeholder, onSubmit }) {
  return (
    <Container onSubmit={onSubmit}>
      <input placeholder={placeholder} type="text" />
      <button type="submit">
        <BiSearch size="24px" />
      </button>
    </Container>
  )
}
