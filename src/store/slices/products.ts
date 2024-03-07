import { createAppAsyncThunk } from '@/store/hooks';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '@/types/product';
import { fetchProductsAPI } from '@/services/product.service';

/** Internal Actions */
export type ProductsState = {
	products: {
		isLoading: boolean;
		data: Product[] | null;
	};
};

const initialState: ProductsState = {
	products: { isLoading: false, data: null },
};

/** Slice & Reducers */
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.products.isLoading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
			state.products.data = action.payload;
			state.products.isLoading = false;
		});
		builder.addCase(fetchProducts.rejected, (state) => {
			state.products.isLoading = false;
		});
	},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;

/**
 * Async Thunk Functions
 */
export const fetchProducts = createAppAsyncThunk(
	'products/fetchProducts',
	async (_, { getState: _getState, rejectWithValue }) => {
		try {
			const products = await fetchProductsAPI();
			return products;
		} catch (error: any) {
			return rejectWithValue(error.response?.data ?? 'Something went wrong');
		}
	}
);
