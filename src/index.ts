/**
 * The Ts & Js sdk for MVG Bridge
 * Docs: https://developers.mvg.fi/
 */

import { APIEndpoint } from './constants';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { Price } from './price';
import { Order } from './order';

export class Conf {
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: APIEndpoint,
    });
    this.api.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }
}

export const axiosConfig = new Conf();
export const MVGBridge = {
  price: new Price(axiosConfig),
  order: new Order(axiosConfig),
}