import { QueryParams, Route, UrlParams } from './types';

const hostName = process.env.BACKEND_URL || 'http://localhost:8080';

/**
 * Constructs a URL by replacing route parameters with provided values.
 *
 * @param {Route} route - The route object containing the path template.
 * @param {UrlParams} [params] - An optional object containing key-value pairs to replace in the route path.
 * @returns {string} The constructed URL with parameters replaced.
 */
const buildUrl = (route: Route, params?: UrlParams): string => {
  let url = `${hostName}/api${route.path}`;
  if (params) {
    Object.keys(params).forEach((key) => {
      url = url.replace(`:${key}`, params[key].toString());
    });
  }
  return url;
};

/**
 * Builds a query string from an object of query parameters.
 *
 * @param {QueryParams} [params] - An optional object containing key-value pairs to be converted into query parameters.
 * @returns {string} A query string starting with '?' if there are parameters, otherwise an empty string.
 */
const buildQueryParams = (params?: QueryParams): string => {
  if (!params) return '';
  const queryString = Object.entries(params)
    .map(([key, value]) => (value ? `${key}=${value.toString()}` : ''))
    .join('&');
  return queryString ? `?${queryString}` : '';
};

/**
 * Constructs a URL with the given route, URL parameters, and query parameters.
 *
 * @param {Object} params - The parameters for building the URL.
 * @param {Route} params.route - The route to build the URL for.
 * @param {UrlParams} [params.urlParams] - Optional URL parameters to include in the URL.
 * @param {QueryParams} [params.queryParams] - Optional query parameters to include in the URL.
 * @returns {string} The constructed URL with the query parameters appended.
 */
const buildUrlWithQuery = ({
  route,
  urlParams,
  queryParams
}: {
  route: Route;
  urlParams?: UrlParams;
  queryParams?: QueryParams;
}): string => {
  const url = buildUrl(route, urlParams);
  const queryString = buildQueryParams(queryParams);
  return `${url}${queryString}`;
};

export { buildQueryParams, buildUrlWithQuery, buildUrl };
