import {
  combineReducers,
  configureStore as configureToolkitStore,
  PreloadedState
} from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export function configureStore(preloadedState?: PreloadedState<RootState>) {
  return configureToolkitStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: () => any[]) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
