import React from 'react';
import { Provider } from 'react-redux';
import { Store, AnyAction } from 'redux';
import { Persistor } from 'redux-persist';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './components/themes/default'
import GenericPage from './components/pages/GenericPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export default function App({ store, persistor, basename }: { store: Store<any, AnyAction>, persistor: Persistor, basename: string | undefined }) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      <GlobalStyle />
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor}>
        {/* Override `basename` (e.g: `homepage` in `package.json`) */}
        <BrowserRouter basename={basename}>
          {/* Render routes with provided `Layout`. */}
          <ThemeProvider theme={theme}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/page" component={GenericPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}