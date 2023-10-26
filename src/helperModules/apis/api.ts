import axios from 'axios';
import {ApiError} from '../error/types';

import {GetProductParams, Product} from './types';
import {BASE_URL} from '../config';

const handleError = (error: unknown) => {
  if (ApiError.isApiError(error)) {
    return error.message;
  }
  if (axios.isAxiosError(error) && error.response) {
    return new ApiError({
      code: error.response.status,
      type: error.response.statusText,
      message: error.message,
      data: error.response.data,
    });
  }
  return error;
};

export const getProducts = async (
  params: GetProductParams,
): Promise<Product[]> => {
  try {
    const {data} = await axios.get<Product[]>(`${BASE_URL}/products`, {
      withCredentials: true,
      params: params,
    });
    return data;
  } catch (error) {
    throw handleError(error);
  }
};

export const getProduct = async (productId: number): Promise<Product> => {
  try {
    const {data} = await axios.get<Product>(
      `${BASE_URL}/products/${productId}`,
      {
        withCredentials: true,
      },
    );
    return data;
  } catch (error) {
    throw handleError(error);
  }
};
