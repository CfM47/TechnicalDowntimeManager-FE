import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { buildUrl, buildUrlWithQuery } from '@/services/routes/utils';
import { MaintenanceQuery } from '@/types/maitenance';

/**
 * This service is responsible for handling all the requests related to the maintenance feature.
 */
export const MaintenanceServices = {
  /**
   * Creates a new maintenance record.
   * @param data - The maintenance data to be created.
   * @returns The maintenance data created.
   */
  create: (data: any) => {
    const url = buildUrl(routes.maintenance.create);
    return httpRequest({ url, method: 'POST', data });
  },
  /**
   * Gets all maintenance records.
   * @param query - The maintenance query parameters.
   * @returns All maintenance records.
   */
  getAll: (query?: MaintenanceQuery) => {
    const url = buildUrlWithQuery({ route: routes.maintenance.getAll, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Gets a maintenance record by its full composed key.
   * @param id_technician The technician id
   * @param id_equipment The equipment id
   * @param date Date of the maintenance
   * @returns The maintenance data retrieved.
   */
  getById: (id_technician: string, id_equipment: string, date: string) => {
    const url = buildUrl(routes.maintenance.getById, { id_technician, id_equipment, date });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Updates a maintenance record by its full composed key.
   * @param id_technician The technician id
   * @param id_equipment The equipment id
   * @param date Date of the maintenance
   * @param data The maintenance data to be updated.
   * @returns The maintenance data updated.
   */
  update: (id_technician: string, id_equipment: string, date: string, data: any) => {
    const url = buildUrl(routes.maintenance.update, { id_technician, id_equipment, date });
    return httpRequest({ url, method: 'PUT', data });
  },
  /**
   * Deletes a maintenance record by its full composed key.
   * @param id_technician The technician id
   * @param id_equipment The equipment id
   * @param date Date of the maintenance
   * @returns The maintenance data deleted.
   */
  delete: (id_technician: string, id_equipment: string, date: string) => {
    const url = buildUrl(routes.maintenance.delete, { id_technician, id_equipment, date });
    return httpRequest({ url, method: 'DELETE' });
  },

  /**
   * Generates a report of the equipment history.
   * @returns The equipment history report.
   */
  equipmentHistoryReport: (query?: { id_equipment?: string; format?: string }) => {
    const url = buildUrlWithQuery({
      route: routes.maintenance.equipmentHistoryReport,
      queryParams: query
    });
    return httpRequest({ url, method: 'GET' });
  }
};
