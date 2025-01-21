import { httpRequest } from '../api';
import { routes } from '../routes/routes';
import { buildUrl } from '../routes/utils';

export const DowntimeServices = {
  create: (data: any) => {
    const url = buildUrl(routes.downtime.create);
    return httpRequest({ url, method: 'POST', data });
  },
  getAll: () => {
    const url = buildUrl(routes.downtime.getAll);
    return httpRequest({ url, method: 'GET' });
  },
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
  }
};
