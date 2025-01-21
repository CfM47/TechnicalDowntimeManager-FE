import { httpRequest } from '../api';
import { routes } from '../routes/routes';
import { buildUrl } from '../routes/utils';

export const DepartmentServices = {
  create: (data: any) => {
    const url = buildUrl(routes.department.create);
    return httpRequest({ url, method: 'POST', data });
  },
  getAll: () => {
    const url = buildUrl(routes.department.getAll);
    return httpRequest({ url, method: 'GET' });
  },
  getById: (id: string) => {
    const url = buildUrl(routes.department.getById, { id });
    return httpRequest({ url, method: 'GET' });
  },
  update: (id: string, data: any) => {
    const url = buildUrl(routes.department.update, { id });
    return httpRequest({ url, method: 'PUT', data });
  },
  delete: (id: string) => {
    const url = buildUrl(routes.department.delete, { id });
    return httpRequest({ url, method: 'DELETE' });
  }
};
