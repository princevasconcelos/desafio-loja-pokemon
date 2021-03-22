import React from "react";
import styled from "styled-components";
import {Link, useHistory} from 'react-router-dom'

import Search from "components/Search";
import Menu from "components/Menu";

import { CgPokemon } from "react-icons/cg";

const HeaderContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;

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

  const searchPokemon = e => {
    e.preventDefault()
    const name = e.target[0].value
    if (!name) return
    history.push(`/pokemon/${name}`)
  }

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo to="/">
          <CgPokemon size="40px" />
          <strong>POKESHOP</strong>
        </Logo>
  
        <Search placeholder="Pesquise por um Pokemon" onSubmit={searchPokemon} />
      </LogoContainer>
      <Menu />
    </HeaderContainer>
  );
}
