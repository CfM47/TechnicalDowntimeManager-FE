import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { buildUrl, buildUrlWithQuery } from '@/services/routes/utils';
import { RateQuery } from '@/types/rate';

/**
 * This service is responsible for handling all the requests related to the rate feature.
 */
export const RateServices = {
  /**
   * Creates a new rate record.
   * @param data - The rate data to be created.
   * @returns The rate data created.
   */
  create: (data: any) => {
    const url = buildUrl(routes.rate.create);
    return httpRequest({ url, method: 'POST', data });
  },
  /**
   * Gets all rate records.
   * @param query - The rate query parameters.
   * @returns All rate records.
   */
  getAll: (query?: RateQuery) => {
    const url = buildUrlWithQuery({ route: routes.rate.getAll, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Gets a rate record by its full composed key.
   * @param id_technician The technician id
   * @param id_user The user id
   * @param date Date of the rate
   * @returns The rate data retrieved.
   */
  getById: (id_technician: string, id_user: string, date: string) => {
    const url = buildUrl(routes.rate.getById, { id_technician, id_user, date });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Updates a rate record by its full composed key.
   * @param id_technician The technician id
   * @param id_user The user id
   * @param date Date of the rate
   * @param data The rate data to be updated.
   * @returns The rate data updated.
   */
  update: (id_technician: string, id_user: string, date: string, data: any) => {
    const url = buildUrl(routes.rate.update, { id_technician, id_user, date });
    return httpRequest({ url, method: 'PUT', data });
  },
  /**
   * Deletes a rate record by its full composed key.
   * @param id_technician The technician id
   * @param id_user The user id
   * @param date Date of the rate
   * @returns The rate data deleted.
   */
  delete: (id_technician: string, id_user: string, date: string) => {
    const url = buildUrl(routes.rate.delete, { id_technician, id_user, date });
    return httpRequest({ url, method: 'DELETE' });
  }
};
