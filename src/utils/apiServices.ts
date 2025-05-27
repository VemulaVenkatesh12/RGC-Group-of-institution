/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
    type AxiosResponse,
    type InternalAxiosRequestConfig,
    type AxiosBasicCredentials,
    type ResponseType,
    AxiosProgressEvent,
  } from "axios";
  
  export interface IRequestOptions {
    headers?: any;
    basicAuth?: AxiosBasicCredentials;
    responseType?: ResponseType;
    onProgressUpdate?: (progressEvent: AxiosProgressEvent) => void;
  }
  
  const baseUrl = "/api";

  
  const onRequest = (
    config: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> => {
    return config;
  };
  
  
  const onResponseSuccess = (
    response: any
  ): AxiosResponse<any, any> | Promise<AxiosResponse<any, any>> => {
    endRequest();
    return response;
  };
  
  const onResponseError = async (err: any): Promise<never> => {
    endRequest();
    return await Promise.reject(err);
  };
  
  export const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 1000 * 60 * 60,
    validateStatus: function (status) {
      return status === 200 || status === 201 || status === 204;
    },
  });
  
  axiosInstance.interceptors.request.use(onRequest);
  axiosInstance.interceptors.response.use(onResponseSuccess, onResponseError);
  
  let onRequestStart: () => void;
  let onRequestEnd: () => void;
  let totalRequests = 0;
  let completedRequests = 0;
  
  const startRequest = (displayLoader = true): void => {
    if (displayLoader) {
      onRequestStart?.();
    }
    totalRequests += 1;
  };
  
  const endRequest = (): void => {
    completedRequests += 1;
    if (completedRequests === totalRequests) {
      onRequestEnd?.();
    }
  };
  
  export function addRequestStartListener(callback: () => void): void {
    onRequestStart = callback;
  }
  export function addRequestEndListener(callback: () => void): void {
    onRequestEnd = callback;
  }
  
  export async function Get<T, D>(
    endPoint: string,
    params?: D,
    requestOptions: IRequestOptions = {},
    displayLoader = true
  ): Promise<T> {
    startRequest(displayLoader);
    const res = await axiosInstance.get<T, AxiosResponse<T>, D>(endPoint, {
          params,
          headers: requestOptions.headers,
          responseType: requestOptions.responseType,
        });
    return res.data;
  }
  
  export async function Post<T, D>(
    endPoint: string,
    data?: D,
    requestOptions: IRequestOptions = {},
    displayLoader = true
  ): Promise<AxiosResponse<T>> {
    startRequest(displayLoader);
    const res = await axiosInstance.post<T, AxiosResponse<T>, D>(endPoint, data, {
          headers: requestOptions.headers !== null ? requestOptions.headers : {},
          auth: requestOptions.basicAuth,
          onUploadProgress: requestOptions.onProgressUpdate,
        })
    return res;
  }
  
  export async function Put<T, D>(
    endPoint: string,
    data: D,
    requestOptions: IRequestOptions = {},
    displayLoader = true
  ): Promise<T> {
    startRequest(displayLoader);
    const res = await axiosInstance.put<T, AxiosResponse<T>, D>(endPoint, data, {
          headers: requestOptions.headers,
        })
    return res.data;
  }
  
  export async function Delete<T>(
    endPoint: string,
    requestOptions: IRequestOptions = {},
    displayLoader = true
  ): Promise<T> {
    startRequest(displayLoader);
    const res = await axiosInstance.delete<T>(endPoint, {
          headers: requestOptions.headers,
        })
    return res.data;
  }
  