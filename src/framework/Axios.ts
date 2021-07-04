// the following code from:
// https://medium.com/@enetoOlveda/how-to-use-axios-typescript-like-a-pro-7c882f71e34a

import axios, { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';

export class Axios {
    public interceptors: {
        /**
         * The **Request** interceptor will be call rigth before the `http request`
         * @summary
         * This a useful method especially if you need to send a token on each request.
         */
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        /**
         * The **Response** interceptor will be call rigth before the `http request` is received.
         * @summary
         * This a useful method especially if you need to send a token on each request.
         */
        response: AxiosInterceptorManager<AxiosResponse>;
    };
    constructor(config: AxiosRequestConfig) {
        return axios.create(config);
    }
}
