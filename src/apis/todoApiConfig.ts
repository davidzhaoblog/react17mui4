import * as qs from "qs";
import { PathLike } from "fs";

export const todoApiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: "",
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


