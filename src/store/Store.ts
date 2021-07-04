import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { reducers } from './CombinedReducers';

const store = configureStore({
    reducer: reducers
    // TODO: the following commented out code can suppress: "A non-serializable value was detected in the state, in the path:"
    ,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            // Ignore these action types, Alert and whenever showAlert is called.
            ignoredActions: ['app/showAlert', 'logout/pending', 'persist/PERSIST'],
            // // Ignore these field paths in all actions
            // ignoredActionPaths: ['app.alert.buttons[0].handler'],
            //   // Ignore these paths in the state
            //   ignoredPaths: ['items.dates']
            // persist/PERSIST is from 'redux-persist/integration/react'
        }
    })
})

export default store;
