import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slice/userSlice';


// Configuration for Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistUserReducer = persistReducer(persistConfig, userReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: {
    loginUserData: persistUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create the persistor
export const persistor = persistStore(store);
