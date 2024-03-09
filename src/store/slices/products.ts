import { createAppAsyncThunk } from '@/store/hooks';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types/product';
import { fetchProductsAPI } from '@/services/product.service';

/** Internal Actions */
export type ProductsState = {
	products: {
		data: Product[] | null;
		isLoading: boolean;
		error: any | null;
	};
	filteredProducts: Product[] | null;
};

const initialState: ProductsState = {
	products: { data: null, isLoading: false, error: null },
	filteredProducts: null,
};

/** Slice & Reducers */
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setFilteredProducts: (state, action: PayloadAction<Product[]>) => {
			state.filteredProducts = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state) => {
			state.products.isLoading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
			state.products.data = action.payload;
			state.filteredProducts = action.payload;
			state.products.isLoading = false;
		});
		builder.addCase(fetchProducts.rejected, (state, action: PayloadAction<any>) => {
			state.products.error = action.payload;
			state.products.isLoading = false;
		});
	},
});

export const { setFilteredProducts } = productsSlice.actions;
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
