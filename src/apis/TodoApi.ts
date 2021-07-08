import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiBase } from "src/framework/ApiBase";
import { Todo } from "src/models/Todo";
import { todoApiConfig } from "./todoApiConfig";

export class TodoApi extends ApiBase {
  constructor(config: AxiosRequestConfig) {
    // NEVER FORGET THE SUPER
    super(config);

    // this middleware is been called right before the http request is made.
    this.interceptors.request.use((param: AxiosRequestConfig) => ({
      ...param,
    }));

    // this middleware is been called right before the response is get it by the method that triggers the request
    this.interceptors.response.use((param: AxiosResponse) => ({
      ...param
    }));

    this.getList = this.getList.bind(this);
  }
  public getList = (): Promise<Todo[]> => {
    const url = process.env.REACT_APP_TODOLIST_DATAFILE_URL;
    return this.get<Todo[], AxiosResponse<Todo[]>>(url).then(this.success);
  }
}

export const todoApi = new TodoApi(todoApiConfig);