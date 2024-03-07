import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import productsReducer from './slices/products';
import cartReducer from './slices/cart';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
