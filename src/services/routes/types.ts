import { HttpMethod } from '@/services/api/api';

export type UrlParams = { [key: string]: string | number };

export type QueryParams = { [key: string]: string | number };

export type Route = {
  path: string;
  method: HttpMethod;
};

export type Router = Record<string, Route>;
