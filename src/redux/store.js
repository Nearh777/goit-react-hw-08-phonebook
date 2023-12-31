import { configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterSlice } from './filter/filterSlice';
// import { uploadContactsReducer } from 'redux/uploadContacts/uploadContactsSlice';



//! Persisting token field from auth slice to localstorage
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};



export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterSlice.reducer,
        // uploadContacts: uploadContactsReducer,

    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    ],
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);




