import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { CgPokemon } from 'react-icons/cg'

import Search from 'components/Search'
import Menu from 'components/Menu'
import DataContext from 'contexts/data'

import * as S from './styles'

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
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.Logo to="/" onClick={handleLogoClick}>
          <CgPokemon size="40px" />
          <strong>POKESHOP</strong>
        </S.Logo>

        <Search placeholder="Buscar Pokemon" onSubmit={searchPokemon} />

        {hasCartValues.length > 0
          ? <S.CartContainer>
              <span>{hasCartValues.length}</span>
              <FiShoppingCart size="40px" color="white" onClick={handleMenuClick} />
          </S.CartContainer>
          : null}
      </S.LogoContainer>
      <Menu />
    </S.HeaderContainer>
  )
}
