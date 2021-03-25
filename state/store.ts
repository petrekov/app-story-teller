import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ReduxState } from './types'
import { persistReducer, persistStore } from 'redux-persist'
import mainReducer from './main-reduces'

// Help functions
export const propertyOf = <TObj>(name: keyof TObj) => name

const middlewares = [thunkMiddleware]
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [propertyOf<ReduxState>('auth'), propertyOf<ReduxState>('plan')]
}
const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

