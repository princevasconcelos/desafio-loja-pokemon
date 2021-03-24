import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  background: ${props => props.theme.colors.primary};
`

export const Logo = styled(Link)`
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

export const LogoContainer = styled.div`
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

export const CartContainer = styled.div`
  position: relative;
  display: block;

  @media (min-width: 600px) {
    display: none;
  }

  > span {
    position: absolute;
    color: white;
    font-weight: 700;
    left: calc(50% - 4px);
    background: ${props => props.theme.colors.secondary};
    border-radius: 50%;
    font-size: 12px;
    min-width: 20px;
    min-height: 16px;
    text-align: center;
  }
`
