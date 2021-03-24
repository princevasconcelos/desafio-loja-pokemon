import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgPokemon } from 'react-icons/cg'

import Search from 'components/Search'
import Menu from 'components/Menu'
import DataContext from 'contexts/data'

const HeaderContainer = styled.div`
  background: ${props => props.theme.colors.primary};
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  color: ${props => props.theme.colors.tertiary};

  > strong {
    display: none;

    @media (min-width: 600px) {
      display: block;
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;

  > svg {
    display: block;

    @media (min-width: 600px) {
      display: none;
    }
  }
`

const CartContainer = styled.div`
  position: relative;

  > span {
    position: absolute;
    color: white;
    font-weight: 700;
    left: calc(50% - 4px);
    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;
    padding: 1px 5px;
    font-size: 12px;
  }
`

export default ({ handleMenuClick }) => {
  const history = useHistory()
  const { changeTheme, cart } = useContext(DataContext)

  const hasCartValues = Object.keys(cart)

  const handleLogoClick = () => changeTheme('normal')

  const searchPokemon = e => {
    e.preventDefault()
    const name = e.target[0].value
    if (!name) return
    history.push(`/pokemon/${name.toLowerCase()}`)
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo to="/" onClick={handleLogoClick}>
          <CgPokemon size="40px" />
          <strong>POKESHOP</strong>
        </Logo>

        <Search placeholder="Buscar Pokemon" onSubmit={searchPokemon} />

        {hasCartValues.length > 0
          ? <CartContainer>
              <span>{hasCartValues.length}</span>
              <FiShoppingCart size="40px" color="white" onClick={handleMenuClick} />
          </CartContainer>
          : null}
      </LogoContainer>
      <Menu />
    </HeaderContainer>
  )
}
