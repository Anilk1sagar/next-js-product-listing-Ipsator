import http from '@/utils/http';
import { buildApiURL } from '@/utils/helpers';
import { Product } from '@/types/product';

export const fetchProductsAPI = () => {
	return http.get(buildApiURL(`/products`)).then(({ data }) => {
		return data as Product[];
	});
};
