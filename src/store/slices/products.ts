import { createAppAsyncThunk } from '@/store/hooks';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from '@/types/product';
import { fetchProductByIdAPI, fetchProductsAPI } from '@/services/product.service';

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
	products: {
		data: [
			{
				id: 1,
				title: 'string',
				price: 100.23,
				description: 'Electronics',
				category: 'string',
				image: 'string',
				rating: {
					rate: 4,
					count: 10,
				},
			},
		],
		isLoading: false,
		error: null,
	},
	filteredProducts: [
		{
			id: 1,
			title: 'string',
			price: 100.23,
			description: 'Electronics',
			category: 'string',
			image: 'string',
			rating: {
				rate: 4,
				count: 10,
			},
		},
	],
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

export const fetchProductById = createAppAsyncThunk(
	'products/fetchProductById',
	async (params: { productId: string }, { getState: _getState, rejectWithValue }) => {
		try {
			const product = await fetchProductByIdAPI(params.productId);
			return product;
		} catch (error: any) {
			return rejectWithValue(error.response?.data ?? 'Something went wrong');
		}
	}
);
