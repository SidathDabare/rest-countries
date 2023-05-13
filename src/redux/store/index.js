/** @format */

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { encryptTransform } from "redux-persist-transform-encrypt"
import { persistStore, persistReducer } from "redux-persist"
import { setColorReducer } from "../reducer/setColorReducer"

import storage from "redux-persist/lib/storage"
import setCountryReducer from "../reducer/setCountryReducer"

const persistConfig = {
  key: "root",
  storage,
}

const combinedReducer = combineReducers({
  setColor: setColorReducer,
  setCountry: setCountryReducer,
})
const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
const persistor = persistStore(store)

export { store, persistor }
