import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyMiddleware, createStore, combineReducers, AnyAction, Store
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas';
import rootReducer from './reducers';

import middleware, { sagaMiddleware } from './middleware';

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      store: Store<any, AnyAction>
    }
  }
}

const reducer = persistReducer<any>(
  {
    key: 'root',
    storage,
    whitelist: []
  },
  combineReducers<globalState>({ ...rootReducer })
);

const configStore = (initialState: globalState = { user: {} }) => {
  const store = createStore<any, AnyAction, unknown, unknown>(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return {
    persistor: persistStore(store),
    store
  };
};

const { store, persistor } = configStore();
global.store = store;

export { store, persistor };