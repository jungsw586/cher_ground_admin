import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from "axios";

// export const BASE_URL = "http://localhost:5000/";
export const BASE_URL = "http://10.130.107.117:5000";
export const URL_INVOICE = "invoices";
export const URL_ORDER = "orders";
export const URL_RETAILER = "retailers";
export const URL_WHOLESALER = "wholesalers";
export const URL_USER = "users";
export const URL_TASKS = "tasks";
export const URL_BUILDINGS = "buildings";
export const URL_IN_STORE_CREDIT = "in_store_credit";

import { RouteComponentProps } from "react-router";

const ApiManager = () => {};

const normalClient: AxiosInstance = axios.create({
  baseURL: BASE_URL
});

export const request = (
  config: AxiosRequestConfig,
  auth?: boolean,
  router?: RouteComponentProps
) => {
  const client = normalClient;

  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response || error.message);
  };

  return client(config)
    .then(onSuccess)
    .catch(onError);
};

export default ApiManager;
