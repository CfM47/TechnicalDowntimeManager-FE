import { httpRequest } from '../api';
import { routes } from '../routes/routes';
import { PaginationQuery } from '../routes/types';
import { buildUrl, buildUrlWithQuery } from '../routes/utils';

import { DowntimeQuery } from '@/types/downtime';

/**
 * This service is responsible for handling all the requests related to the downtime feature.
 */
export const DowntimeServices = {
  /**
   * Creates a new downtime record.
   * @param data - The downtime data to be created.
   * @returns The downtime data created.
   */
  create: (data: any) => {
    const url = buildUrl(routes.downtime.create);
    return httpRequest({ url, method: 'POST', data });
  },
  /**
   * Gets all downtime records.
   * @param query - The downtime query parameters.
   * @returns All downtime records.
   */
  getAll: (query?: DowntimeQuery) => {
    const url = buildUrlWithQuery({ route: routes.downtime.getAll, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Gets a downtime record by its full composed key.
   * @param id_sender The sender id
   * @param id_receiver The receiver id
   * @param id_equipment The equipment id
   * @param date Date of the downtime
   * @param id_dep_receiver The receiver department id
   * @returns
   */
  getById: (
    id_sender: string,
    id_receiver: string,
    id_equipment: string,
    date: string,
    id_dep_receiver: string
  ) => {
    const url = buildUrl(routes.downtime.getById, {
      id_sender,
      id_receiver,
      id_equipment,
      date,
      id_dep_receiver
    });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Updates a downtime record by its full composed key.
   * @param id_sender The sender id
   * @param id_receiver The receiver id
   * @param id_equipment The equipment id
   * @param date Date of the downtime
   * @param id_dep_receiver The receiver department id
   * @param data The downtime data to be updated.
   * @returns The downtime data updated.
   */
  update: (
    id_sender: string,
    id_receiver: string,
    id_equipment: string,
    date: string,
    id_dep_receiver: string,
    data: any
  ) => {
    const url = buildUrl(routes.downtime.update, {
      id_sender,
      id_receiver,
      id_equipment,
      date,
      id_dep_receiver
    });
    return httpRequest({ url, method: 'PUT', data });
  },
  /**
   * Deletes a downtime record by its full composed key.
   * @param id_sender The sender id
   * @param id_receiver The receiver id
   * @param id_equipment The equipment id
   * @param date Date of the downtime
   * @param id_dep_receiver The receiver department id
   * @returns The downtime data deleted.
   */
  delete: (
    id_sender: string,
    id_receiver: string,
    id_equipment: string,
    date: string,
    id_dep_receiver: string
  ) => {
    const url = buildUrl(routes.downtime.delete, {
      id_sender,
      id_receiver,
      id_equipment,
      date,
      id_dep_receiver
    });
    return httpRequest({ url, method: 'DELETE' });
  },

  /**
   * Gets all the downtimes of the last year
   * @param query Query for response pagination
   * @returns A Paginated reponse of all the downtimes
   */
  lastYear: (query?: PaginationQuery) => {
    const url = buildUrlWithQuery({ route: routes.downtime.lastYear, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },

  /**
   * Gets the report of all the downtimes of the last year
   * @returns A report of all the downtimes
   */
  lastYearReport: (query?: { format?: string }) => {
    const url = buildUrlWithQuery({ route: routes.downtime.lastYearReport, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  }
};
