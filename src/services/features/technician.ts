import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { PaginationQuery } from '@/services/routes/types';
import { buildUrl, buildUrlWithQuery } from '@/services/routes/utils';
import { TechnicianQuery } from '@/types/technician';

/**
 * This service is responsible for handling all the requests related to the technician feature.
 */
export const TechnicianServices = {
  /**
   * Creates a new technician record.
   * @param data - The technician data to be created.
   * @returns The technician data created.
   */
  create: (data: any) => {
    const url = buildUrl(routes.technician.create);
    return httpRequest({ url, method: 'POST', data });
  },
  /**
   * Gets all technician records.
   * @param query - The technician query parameters.
   * @returns All technician records.
   */
  getAll: (query?: TechnicianQuery) => {
    const url = buildUrlWithQuery({ route: routes.technician.getAll, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Gets a technician record by its ID.
   * @param id - The technician ID.
   * @returns The technician record.
   */
  getById: (id: string) => {
    const url = buildUrl(routes.technician.getById, { id });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Updates a technician record by its ID.
   * @param id - The technician ID.
   * @param data - The technician data to be updated.
   * @returns The updated technician data.
   */
  update: (id: string, data: any) => {
    const url = buildUrl(routes.technician.update, { id });
    return httpRequest({ url, method: 'PUT', data });
  },
  /**
   * Deletes a technician record by its ID.
   * @param id - The technician ID.
   * @returns The deleted technician data.
   */
  delete: (id: string) => {
    const url = buildUrl(routes.technician.delete, { id });
    return httpRequest({ url, method: 'DELETE' });
  },

  /**
   * Fetches the performance data of technicians.
   *
   * @param {PaginationQuery} [query] - Optional query parameters for pagination.
   * @returns {Promise<any>} The performance data of technicians.
   */
  Performance: (query?: PaginationQuery) => {
    const url = buildUrlWithQuery({
      route: routes.technician.performance,
      queryParams: query
    });
    return httpRequest({ url, method: 'GET' });
  },

  /**
   * Fetches the interventions data of a technician.
   *
   * @param {PaginationQuery} [query] - Optional query parameters for pagination.
   * @returns {Promise<any>} The interventions data of the technician.
   */
  Interventions: (query?: PaginationQuery) => {
    const url = buildUrlWithQuery({
      route: routes.technician.interventions,
      queryParams: query
    });
    return httpRequest({ url, method: 'GET' });
  }
};
