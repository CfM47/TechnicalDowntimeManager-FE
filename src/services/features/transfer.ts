import { httpRequest } from '../api';
import { routes } from '../routes/routes';
import { buildUrl, buildUrlWithQuery } from '../routes/utils';

import { TransferQuery } from '@/types/transfer';

/**
 * This service is responsible for handling all the requests related to the transfer feature.
 */
export const TransferServices = {
  /**
   * Creates a new transfer record.
   * @param data - The transfer data to be created.
   * @returns The transfer data created.
   */
  create: (data: any) => {
    const url = buildUrl(routes.transfer.create);
    return httpRequest({ url, method: 'POST', data });
  },
  /**
   * Gets all transfer records.
   * @param query - The transfer query parameters.
   * @returns All transfer records.
   */
  getAll: (query?: TransferQuery) => {
    const url = buildUrlWithQuery({ route: routes.transfer.getAll, queryParams: query });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Gets a transfer record by its full composed key.
   * @param id_sender The sender id
   * @param id_receiver The receiver id
   * @param id_equipment The equipment id
   * @param date Date of the transfer
   * @param id_origin_dep The origin department id
   * @param id_receiver_dep The receiver department id
   * @returns The transfer record.
   */
  getById: (
    id_sender: string,
    id_receiver: string,
    id_equipment: string,
    date: string,
    id_origin_dep: string,
    id_receiver_dep: string
  ) => {
    const url = buildUrl(routes.transfer.getById, {
      id_sender,
      id_receiver,
      id_equipment,
      date,
      id_origin_dep,
      id_receiver_dep
    });
    return httpRequest({ url, method: 'GET' });
  },
  /**
   * Updates a transfer record by its full composed key.
   * @param id_sender The sender id
   * @param id_receiver The receiver id
   * @param id_equipment The equipment id
   * @param date Date of the transfer
   * @param id_origin_dep The origin department id
   * @param id_receiver_dep The receiver department id
   * @param data The transfer data to be updated.
   * @returns The transfer data updated.
   */
  update: (
    id_sender: string,
    id_receiver: string,
    id_equipment: string,
    date: string,
    id_origin_dep: string,
    id_receiver_dep: string,
    data: any
  ) => {
    const url = buildUrl(routes.transfer.update, {
      id_sender,
      id_receiver,
      id_equipment,
      date,
      id_origin_dep,
      id_receiver_dep
    });
    return httpRequest({ url, method: 'PUT', data });
  },
  /**
   * Deletes a transfer record by its full composed key.
   * @param id_sender The sender id
   * @param id_receiver The receiver id
   * @param id_equipment The equipment id
   * @param date Date of the transfer
   * @param id_origin_dep The origin department id
   * @param id_receiver_dep The receiver department id
   * @returns The transfer data deleted.
   */
  delete: (
    id_sender: string,
    id_receiver: string,
    id_equipment: string,
    date: string,
    id_origin_dep: string,
    id_receiver_dep: string
  ) => {
    const url = buildUrl(routes.transfer.delete, {
      id_sender,
      id_receiver,
      id_equipment,
      date,
      id_origin_dep,
      id_receiver_dep
    });
    return httpRequest({ url, method: 'DELETE' });
  }
};
