import { httpRequest } from '../api';
import { routes } from '../routes/routes';
import { buildUrl } from '../routes/utils';

export const RoleServices = {
  create: (data: any) => {
    const url = buildUrl(routes.role.create);
    return httpRequest({ url, method: 'POST', data });
  },
  getAll: () => {
    const url = buildUrl(routes.role.getAll);
    return httpRequest({ url, method: 'GET' });
  },
  getById: (id: string) => {
    const url = buildUrl(routes.role.getById, { id });
    return httpRequest({ url, method: 'GET' });
  },
  update: (id: string, data: any) => {
    const url = buildUrl(routes.role.update, { id });
    return httpRequest({ url, method: 'PUT', data });
  },
  delete: (id: string) => {
    const url = buildUrl(routes.role.delete, { id });
    return httpRequest({ url, method: 'DELETE' });
  }
};
