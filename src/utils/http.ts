import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
	timeout: 60000,
});

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	// console.info(`[request] [${JSON.stringify(config)}]`);
	// Modify the config data if needed

	return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	console.error(`[request error] [${JSON.stringify(error)}]`);
	return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): Promise<AxiosResponse> => {
	// console.info(`[response] [${JSON.stringify(response)}]`);
	// Modify the response data if needed

	return Promise.resolve(response);
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
	console.error(`[response error] [${JSON.stringify(error)}]`);

	// Handle response errors

	return Promise.reject(error);
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
