import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '@/types/product';

/** Internal Actions */
export type CartState = {
	cart: Product[];
};

const initialState: CartState = {
	cart: [],
};

/** Slice & Reducers */
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<number>) => {},
		removeFromCart: () => {},
		addQuantity: () => {},
		removeQuantity: () => {},
	},
});

export const { addToCart, removeFromCart, addQuantity, removeQuantity } = cartSlice.actions;
export default cartSlice.reducer;

/**
 * Async Thunk Functions
 */
