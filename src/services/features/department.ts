import { httpRequest } from '../api';
import { routes } from '../routes/routes';
import { buildUrl, buildUrlWithQuery } from '../routes/utils';

import { DepartmentQuery } from '@/types/department';

/**
 * This service is responsible for handling all the requests related to the department feature.
 */
export const DepartmentServices = {
  /**
   * Creates a new department record.
   * @param data - The department data to be created.
   * @returns The department data created.
   */
  create: (data: any) => {
    const url = buildUrl(routes.department.create);
    return httpRequest({ url, method: 'POST', data });
  },
  /**
   * Gets all department records.
   * @param query - The query filters applied to the departments
   * @returns All department records.
   */
  getAll: (query?: DepartmentQuery) => {
    const url = buildUrlWithQuery({ route: routes.department.getAll, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Gets a department record by its ID.
   * @param id - The department ID.
   * @returns The department data.
   */
  getById: (id: string) => {
    const url = buildUrl(routes.department.getById, { id });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Updates a department record by its ID.
   * @param id - The department ID.
   * @param data - The department data to be updated.
   * @returns The updated department data.
   */
  update: (id: string, data: any) => {
    const url = buildUrl(routes.department.update, { id });
    return httpRequest({ url, method: 'PUT', data });
  },
  /**
   * Deletes a department record by its ID.
   * @param id - The department ID.
   * @returns The deleted department data.
   */
  delete: (id: string) => {
    const url = buildUrl(routes.department.delete, { id });
    return httpRequest({ url, method: 'DELETE' });
  }
};
