import { httpRequest } from '../api';
import { routes } from '../routes/routes';
import { buildUrl } from '../routes/utils';

export const TransferServices = {
  create: (data: any) => {
    const url = buildUrl(routes.transfer.create);
    return httpRequest({ url, method: 'POST', data });
  },
  getAll: () => {
    const url = buildUrl(routes.transfer.getAll);
    return httpRequest({ url, method: 'GET' });
  },
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
