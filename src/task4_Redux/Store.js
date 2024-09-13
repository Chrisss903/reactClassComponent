import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import UsSlice from './Slice';

// redux-persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, UsSlice);

// Create the Redux store with persisted reducer
const store = configureStore({
    reducer: {
        userSlice: persistedReducer, // The persisted reducer goes here
    },
});

const persistor = persistStore(store); // Persistor to sync localStorage with the store

export { store, persistor };
