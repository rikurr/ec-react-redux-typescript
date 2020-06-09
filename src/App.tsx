import React, { useEffect, FC } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import { selectApp } from './features/appSlice/appSlice';
import { selectUser } from './features/user/userSlice';

// ======= components ======
import Top from './components/Top';
import Login from './components/Login';
import Header from './components/Header';
import { Footer, FlashMessages, LoadingIcon } from './components/common';
import Page404 from './components/Page404';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserAuth } from './features/user/userSlice';
import AdminPage from './components/AdminPage';
import Shop from './components/Shop';

const App: FC = () => {
  const appState = useSelector(selectApp);
  const userState = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  console.log(userState.currrentUser);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <FlashMessages messages={appState.messages} />
        {userState.isFetching ? (
          <LoadingIcon />
        ) : (
          <>
            <Header />
            <Switch>
              <Route exact path='/'>
                <Top />
                </Route>
                <Route path='/shop/:category'>
                  <Shop />
                </Route>
              <Route path='/login'>
                <Login />
              </Route>
              {userState.isLogin && userState.currrentUser.role_id === 1 && (
                <Route path='/admin'>
                  <AdminPage />
                </Route>
              )}
              <Route>
                <Page404 />
              </Route>
            </Switch>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
