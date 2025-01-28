import { HttpMethod } from '../api/api';

/**
 * Represents URL parameters as a key-value pair where the key is a string
 * and the value can be either a string or a number.
 */
export type UrlParams = { [key: string]: string | number };

/**
 * Represents query parameters as a key-value pair where the key is a string
 * and the value can be a string, number, or undefined.
 */
export type QueryParams = { [key: string]: string | number | undefined };

/**
 * Represents a route with a specific path and HTTP method.
 *
 * @property path - The URL path of the route.
 * @property method - The HTTP method used for the route.
 */
export type Route = {
  path: string;
  method: HttpMethod;
};

/**
 * Represents the query parameters for pagination.
 *
 * @property page - The current page number.
 * @property size - The number of items per page.
 */
export type PaginationQuery = {
  page: number;
  size: number;
};

/**
 * Represents a collection of routes where the key is a string and the value is a Route object.
 */
export type Router = Record<string, Route>;
