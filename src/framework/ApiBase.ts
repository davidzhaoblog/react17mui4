// the following code from:
// https://medium.com/@enetoOlveda/how-to-use-axios-typescript-like-a-pro-7c882f71e34a
// https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
// https://stackshare.io/stackups/axios-vs-react-redux
// https://www.npmtrends.com/redux-api-middleware-vs-redux-axios-middleware-vs-redux-debounced-vs-redux-promise-middleware
// TODO: important decision: use axios.

import { Axios } from './Axios'
import Cookies from 'universal-cookie';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
export class ApiBase extends Axios {
    // private token: string;

    /**
     * Creates an instance of api.
     * @param {import("axios").AxiosRequestConfig} conf
     */
    public constructor(conf: AxiosRequestConfig) {
        super(conf);

        // const cookies = new Cookies();
        // this.token = cookies.get(CookieKeys.Token);

        this.getToken = this.getToken.bind(this);
        this.setToken = this.setToken.bind(this);
        this.getUri = this.getUri.bind(this);
        this.request = this.request.bind(this);
        this.get = this.get.bind(this);
        this.options = this.options.bind(this);
        this.delete = this.delete.bind(this);
        this.head = this.head.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
        this.patch = this.patch.bind(this);
        this.success = this.success.bind(this);
        this.error = this.error.bind(this);

        this.Get = this.Get.bind(this);

        this.interceptors.request.use((param) => {
            const token = this.getToken();
            if(token)
            {
                return {
                    ...param,
                    defaults: {
                        headers: {
                            ...param.headers,
                            "Authorization": `${token}`
                        },
                    }
                }
            }
            return {
                ...param,
                defaults: {
                    headers: {
                        ...param.headers,
                    },
                }
            }

        }, (error) => {
            // handling error
        });

        // this middleware is been called right before the response is get it by the method that triggers the request
        // the original code was commented out below.
        // fixes from https://github.com/axios/axios/issues/1510.
        this.interceptors.response.use((param) => ({
            ...param
        }), error => {
            // Something went wrong, figure out how to handle it here or in a `.catch` somewhere down the pipe
            // TODO: refresh token when expire every N minutes:
            // https://stackoverflow.com/questions/35900230/axios-interceptors-and-asynchronous-login
        });
    }
    /**
     * Gets Token.
     *
     * @returns {string} token.
     * @memberof Api
     */
    public getToken = () => {
        const cookies = new Cookies();
        const token = cookies.get("Token");

        if(token)
        {
            return `Bearer ${token}`;
        }
        return null;
    }
    /**
     * Sets Token.
     *
     * @param {string} token - token.
     * @memberof Api
     */
    public setToken = (token: string) => {
        const cookies = new Cookies();
        cookies.set("Token", token);        
        // this.token = token;
    }

    /**
     * Get Uri
     *
     * @param {import("axios").AxiosRequestConfig} [config]
     * @returns {string}
     * @memberof Api
     */
    public getUri = (config?: AxiosRequestConfig): string => {
        return this.getUri(config);
    }
    /**
     * Generic request.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP axios response payload.
     * @memberof Api
     *
     * @example
     * api.request({
     *   method: "GET|POST|DELETE|PUT|PATCH"
     *   baseUrl: "http://www.domain.com",
     *   url: "/api/v1/users",
     *   headers: {
     *     "Content-Type": "application/json"
     *  }
     * }).then((response: AxiosResponse<User>) => response.data)
     *
     */
    public request<T, R = AxiosResponse<T>>(
        config: AxiosRequestConfig
    ): Promise<R> {
        return this.request(config);
    }
    /**
     * HTTP GET method, used to fetch data `statusCode`: 200.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} HTTP `axios` response payload.
     * @memberof Api
     */
    public get<T, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.get(url, config);
    }
    /**
     * HTTP OPTIONS method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} HTTP `axios` response payload.
     * @memberof Api
     */
    public options<T, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.options(url, config);
    }
    /**
     * HTTP DELETE method, `statusCode`: 204 No Content.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public delete<T, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.delete(url, config);
    }
    /**
     * HTTP HEAD method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public head<T, R = AxiosResponse<T>>(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.head(url, config);
    }
    /**
     * HTTP POST method `statusCode`: 201 Created.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public post<T, B, R = AxiosResponse<T>>(
        url: string,
        data?: B,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.post(url, data, config);
    }
    /**
     * HTTP PUT method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public put<T, B, R = AxiosResponse<T>>(
        url: string,
        data?: B,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.put(url, data, config);
    }
    /**
     * HTTP PATCH method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public patch<T, B, R = AxiosResponse<T>>(
        url: string,
        data?: B,
        config?: AxiosRequestConfig
    ): Promise<R> {
        return this.patch(url, data, config);
    }
    /**
     *
     * @template T - type.
     * @param {import("axios").AxiosResponse<T>} response - axios response.
     * @returns {T} - expected object.
     * @memberof Api
     */
    public success = <T>(response: AxiosResponse<T>): T => {
        console.log(response);
        return response.data;
    }
    /**
     *
     *
     * @template T type.
     * @param {AxiosError<T>} error
     * @memberof Api
     */
    public error = <T>(error: AxiosError<T>): void => {
        throw error;
    }

    public Get = <TRequest, TResponse>(url: string, params: TRequest): Promise<TResponse> => {
        const queryString = this.ConvertCriteriaToQueryString(params)
        const urlWithQueryString = queryString ? url + "?" + queryString :  url;
        return this.get<TResponse, AxiosResponse<TResponse>>(urlWithQueryString)
            .then(this.success);
    }

    protected ConvertCriteriaToQueryString = <TRequest>(params: TRequest): string | null => {
        // https://morioh.com/p/480aef8e92cd
        // Exclude empty or null or undefined properties or fields.
        // ES 6
        if(!params)
            return null;
        return Object.keys(params).filter(key => params[key]).map(key => key + '=' + params[key]).join('&');

        // // ES 5
        // return Object.keys(params).filter(function(key){ return params[key]; }).map(function(key) {
        //   return key + '=' + params[key]
        // }).join('&');
    }

}
