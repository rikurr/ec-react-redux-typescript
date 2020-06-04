import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';

import Top from './components/Top';
import Login from './components/Login';
import Header from './components/Header';
import { Footer } from './components/common';
import Page404 from './components/Page404';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/'>
            <Top />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
