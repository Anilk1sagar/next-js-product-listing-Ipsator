import { siteConfig } from '@/configs';

export const buildApiURL = (endpoint: string) => {
	return `${siteConfig.apiBaseUrl}` + endpoint;
};

export const debounce = (cb: (...args: any[]) => any, delay: number = 500) => {
	if (typeof cb !== 'function') {
		throw Error('Passed parameters must be a function');
	}

	let timer: NodeJS.Timeout;

	return (...args: any[]) => {
		if (timer) clearTimeout(timer);

		timer = setTimeout(() => {
			cb(...args);
		}, delay);
	};
};
