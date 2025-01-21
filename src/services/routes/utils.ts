import { QueryParams, Route, UrlParams } from './types';

const hostName = process.env.BACKEND_URL || 'http://localhost:8080';

const buildUrl = (route: Route, params?: UrlParams): string => {
  let url = `${hostName}/api${route.path}`;
  if (params) {
    Object.keys(params).forEach((key) => {
      url = url.replace(`:${key}`, params[key].toString());
    });
  }
  return url;
};

const buildQueryParams = (params?: QueryParams): string => {
  if (!params) return '';
  const queryString = Object.keys(params)
    .map((key) => `${key}=${params[key].toString()}`)
    .join('&');
  return queryString ? `?${queryString}` : '';
};

const buildUrlWithQuery = (
  route: Route,
  urlParams?: UrlParams,
  queryParams?: QueryParams
): string => {
  const url = buildUrl(route, urlParams);
  const queryString = buildQueryParams(queryParams);
  return `${url}${queryString}`;
};

export { buildQueryParams, buildUrlWithQuery, buildUrl };
