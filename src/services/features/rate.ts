import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { buildUrl } from '@/services/routes/utils';

export const RateServices = {
  create: (data: any) => {
    const url = buildUrl(routes.rate.create);
    return httpRequest({ url, method: 'POST', data });
  },
  getAll: () => {
    const url = buildUrl(routes.rate.getAll);
    return httpRequest({ url, method: 'GET' });
  },
  getById: (id_technician: string, id_user: string, date: string) => {
    const url = buildUrl(routes.rate.getById, { id_technician, id_user, date });
    return httpRequest({ url, method: 'GET' });
  },
  update: (id_technician: string, id_user: string, date: string, data: any) => {
    const url = buildUrl(routes.rate.update, { id_technician, id_user, date });
    return httpRequest({ url, method: 'PUT', data });
  },
  delete: (id_technician: string, id_user: string, date: string) => {
    const url = buildUrl(routes.rate.delete, { id_technician, id_user, date });
    return httpRequest({ url, method: 'DELETE' });
  }
};
