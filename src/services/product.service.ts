import http from '@/utils/http';
import { buildApiURL } from '@/utils/helpers';
import { Product } from '@/types/product';

export const fetchProductsAPI = async () => {
	const { data } = await http.get(buildApiURL(`/products`));
	return data as Product[];
};
