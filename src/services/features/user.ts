import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { buildUrl, buildUrlWithQuery } from '@/services/routes/utils';
import { UserQuery } from '@/types/user';

/**
 * This service is responsible for handling all the requests related to the user feature.
 */
export const UserServices = {
  /**
   * Creates a new user record.
   * @param data - The user data to be created.
   * @returns The user data created.
   */
  create: (data: any) => {
    const url = buildUrl(routes.user.create);
    return httpRequest({ url, method: 'POST', data });
  },
  /**
   * Gets all user records.
   * @param query - The user query parameters.
   * @returns All user records.
   */
  getAll: (query?: UserQuery) => {
    const url = buildUrlWithQuery({ route: routes.user.getAll, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Gets a user record by its ID.
   * @param id - The user ID.
   * @returns The user record.
   */
  getById: (id: string) => {
    const url = buildUrl(routes.user.getById, { id });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Updates a user record by its ID.
   * @param id - The user ID.
   * @param data - The user data to be updated.
   * @returns The updated user data.
   */
  update: (id: string, data: any) => {
    const url = buildUrl(routes.user.update, { id });
    return httpRequest({ url, method: 'PUT', data });
  },
  /**
   * Deletes a user record by its ID.
   * @param id - The user ID.
   * @returns The deleted user data.
   */
  delete: (id: string) => {
    const url = buildUrl(routes.user.delete, { id });
    return httpRequest({ url, method: 'DELETE' });
  }
};
