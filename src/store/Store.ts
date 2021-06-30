import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage' // defaults to localStorage for web

import { reducers } from './CombinedReducers';

const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer
    // TODO: the following commented out code can suppress: "A non-serializable value was detected in the state, in the path:"
    ,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            // Ignore these action types, Alert and whenever showAlert is called.
            ignoredActions: [
                FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
                'app/showAlert', 'logout/pending', 'persist/PERSIST'
            ],
            // // Ignore these field paths in all actions
            // ignoredActionPaths: ['app.alert.buttons[0].handler'],
            //   // Ignore these paths in the state
            //   ignoredPaths: ['items.dates']
            // persist/PERSIST is from 'redux-persist/integration/react'
        }
    })
})

export type AppDispatch = typeof store.dispatch

export default store;
