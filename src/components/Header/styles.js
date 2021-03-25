import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  background: ${props => props.theme.colors.primary};
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 16px;
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
  justify-content: space-between;

  > svg {
    display: block;

    @media (min-width: 600px) {
      display: none;
    }
  }
`

export const CartContainer = styled.button`
  position: relative;
  display: block;
  margin-left: 16px;

  @media (min-width: 600px) {
    display: none;
  }

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
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
