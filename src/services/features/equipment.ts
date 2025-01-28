import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { buildUrl, buildUrlWithQuery } from '@/services/routes/utils';
import { EquipmentQuery } from '@/types/equipment';

/**
 * This service is responsible for handling all the requests related to the equipment feature.
 */
export const EquipmentServices = {
  /**
   * Creates a new equipment record.
   * @param data - The equipment data to be created.
   * @returns The equipment data created.
   */
  create: (data: any) => {
    const url = buildUrl(routes.equipment.create);
    return httpRequest({ url, method: 'POST', data });
  },
  /**
   * Gets all equipment records.
   * @param query - The equipment query parameters.
   * @returns All equipment records.
   */
  getAll: (query?: EquipmentQuery) => {
    const url = buildUrlWithQuery({ route: routes.equipment.getAll, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Gets an equipment record by its ID.
   * @param id - The equipment ID.
   * @returns The equipment record.
   */
  getById: (id: string) => {
    const url = buildUrl(routes.equipment.getById, { id });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Updates an equipment record by its ID.
   * @param id - The equipment ID.
   * @param data - The equipment data to be updated.
   * @returns The updated equipment data.
   */
  update: (id: string, data: any) => {
    const url = buildUrl(routes.equipment.update, { id });
    return httpRequest({ url, method: 'PUT', data });
  },
  /**
   * Deletes an equipment record by its ID.
   * @param id - The equipment ID.
   * @returns The deleted equipment data.
   */
  delete: (id: string) => {
    const url = buildUrl(routes.equipment.delete, { id });
    return httpRequest({ url, method: 'DELETE' });
  }
};
