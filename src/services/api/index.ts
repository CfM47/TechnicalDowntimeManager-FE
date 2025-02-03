import { ApiError, ApiResponse, HttpMethod } from './api';

import { getToken } from '@/lib/cookies';

export interface HttpRequestProps {
  url: string;
  method: HttpMethod;
  data?: any;
  config?: RequestInit;
}

export type HttpRequestType = <T>(props: HttpRequestProps) => Promise<ApiResponse<T>>;

export const httpRequest = async <T>({
  url,
  method,
  data,
  config
}: HttpRequestProps): Promise<ApiResponse<T>> => {
  try {
    const token = getToken();

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...config?.headers
      },
      body: data ? JSON.stringify(data) : undefined,
      ...config
    });

    if (!response.ok) {
      const errorData = await response.json();
      const apiError: ApiError = {
        message: errorData.message || 'An error occurred',
        status: response.status
      };
      return Promise.reject(apiError);
    }

    const responseData = await response.json();
    return {
      data: responseData,
      status: response.status,
      statusText: response.statusText
    };
  } catch (error) {
    const apiError: ApiError = {
      message: 'An unexpected error occurred: ' + JSON.stringify(error),
      status: 500
    };
    return Promise.reject(apiError);
  }
};
