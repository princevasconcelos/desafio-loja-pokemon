import React from "react";
import styled from "styled-components";
import Routes from 'routers'

import GlobalStyles from "GlobalStyles";
import { DataProvider } from 'contexts/data'

const RootContainer = styled.div`
  position: relative;

  > aside:hover ~ #blackwindow {
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
`

export default () => (
  <RootContainer>
    <GlobalStyles />
    <DataProvider>
      <Routes />
    </DataProvider>
  </RootContainer>
);
