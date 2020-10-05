import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';

const persistedReducer = persistReducer(
  {
    key: 'Conta digital Dotz',
    storage: AsyncStorage,
  },
  rootReducer,
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};
