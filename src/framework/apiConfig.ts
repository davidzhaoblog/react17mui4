// the following code from:
// https://medium.com/@enetoOlveda/how-to-use-axios-typescript-like-a-pro-7c882f71e34a

import * as qs from "qs";
import { PathLike } from "fs";

export const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: "https://localhost:7809/",
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
            'Access-Control-Allow-Origin': '*',
        },
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
}


