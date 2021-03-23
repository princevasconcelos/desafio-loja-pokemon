import React, {useContext} from "react";
import styled from "styled-components";
import {Link, useHistory} from 'react-router-dom'

import Search from "components/Search";
import Menu from "components/Menu";
import DataContext from 'contexts/data'

import { CgPokemon } from "react-icons/cg";

const HeaderContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
`;

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
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
`;

export default () => {
  const history = useHistory()
  const {changeTheme} = useContext(DataContext)

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
      </LogoContainer>
      <Menu />
    </HeaderContainer>
  );
}
