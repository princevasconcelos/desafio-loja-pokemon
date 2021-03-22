import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "pages/Home";
import Details from "pages/Details";
import Type from 'pages/Type'

import GlobalStyles from "GlobalStyles";

import Header from "components/Header";
import Cart from 'components/Cart'

import { DataProvider } from 'contexts/data'

import themes from 'themes'

const RootContainer = styled.div`
  position: relative;

  @media (min-width: 800px) {
    padding: 0 124px;
}

  > aside:hover ~ #blackwindow {
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`;

const Content = styled.main`
  display: flex;
  max-width: 1280px;
  margin: 24px auto 0;
  justify-content: center;
  // prince

  > div {
    flex: 1;
    padding: 0 16px;

    @media (min-width: 600px) {
      padding: 0;
    }
  }
`;

function App() {
  return (
    <RootContainer>
      <GlobalStyles />
      <DataProvider>
        <Router basename="/">
          <ThemeProvider theme={themes()}>
            <Header />
            <Content>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon/:name?"  component={Details} />
              <Route exact path="/tipo/:type?" component={Type} />
            </Content>
            <Cart />
          </ThemeProvider>
        </Router>
      </DataProvider>
    </RootContainer>
  );
}

export default App;
