import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { buildUrl } from '@/services/routes/utils';

export const UserServices = {
  create: (data: any) => {
    const url = buildUrl(routes.user.create);
    return httpRequest({ url, method: 'POST', data });
  },
  getAll: () => {
    const url = buildUrl(routes.user.getAll);
    return httpRequest({ url, method: 'GET' });
  },
  getById: (id: string) => {
    const url = buildUrl(routes.user.getById, { id });
    return httpRequest({ url, method: 'GET' });
  },
  update: (id: string, data: any) => {
    const url = buildUrl(routes.user.update, { id });
    return httpRequest({ url, method: 'PUT', data });
  },
  delete: (id: string) => {
    const url = buildUrl(routes.user.delete, { id });
    return httpRequest({ url, method: 'DELETE' });
  }
};
