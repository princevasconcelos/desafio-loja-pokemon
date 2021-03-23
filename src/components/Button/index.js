import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 5px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;

  &:hover {
    opacity: 0.8;
  }
`

export default ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
)
