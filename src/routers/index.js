import React, { useContext, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Details from 'pages/Details'
import Type from 'pages/Type'
import Header from 'components/Header'
import Cart from 'components/Cart'
import DataContext from 'contexts/data'
import themes from 'themes'

const Content = styled.main`
  display: flex;
  max-width: 1280px;
  margin: 24px auto 0;
  justify-content: center;

  > div {
    flex: 1;
    padding: 0 16px;

    @media (min-width: 600px) {
      padding: 0;
    }
  }
`

export default () => {
  const [showCart, setCart] = useState(false)
  const { theme } = useContext(DataContext)

  const toggleMenu = () => setCart(v => !v)

  return (
    <Router basename="/">
      <ThemeProvider theme={themes(theme)}>
        <Header handleMenuClick={toggleMenu} />
        <Content>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:name?" component={Details} />
          <Route exact path="/tipo/:type?" component={Type} />
        </Content>
        <Cart isVisible={showCart} handleCloseClick={toggleMenu} />
      </ThemeProvider>
    </Router>
  )
}
