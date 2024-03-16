import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types/product';

export type CartProduct = Product & { quantity: number };

/** Internal Actions */
export type CartState = {
	cart: CartProduct[];
};

const initialState: CartState = {
	cart: [],
};

/** Slice & Reducers */
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product & { quantity?: number }>) => {
			const product = action.payload;
			const cartProduct = { ...product, quantity: product.quantity || 1 };
			state.cart = [cartProduct, ...state.cart];
		},

		removeFromCart: (state, action: PayloadAction<number>) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
		},

		addQuantity: (state, action: PayloadAction<number>) => {
			const productIndex = state.cart.findIndex((item) => item.id === action.payload);
			if (productIndex > -1) {
				state.cart[productIndex].quantity += 1;
			}
		},
		removeQuantity: (state, action: PayloadAction<number>) => {
			const productIndex = state.cart.findIndex((item) => item.id === action.payload);
			if (productIndex > -1) {
				state.cart[productIndex].quantity -= 1;
			}
		},
	},
});

export const { addToCart, removeFromCart, addQuantity, removeQuantity } = cartSlice.actions;
export default cartSlice.reducer;

/**
 * Async Thunk Functions
 */
