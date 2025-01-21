import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { buildUrl } from '@/services/routes/utils';

export const EquipmentServices = {
  create: (data: any) => {
    const url = buildUrl(routes.equipment.create);
    return httpRequest({ url, method: 'POST', data });
  },
  getAll: () => {
    const url = buildUrl(routes.equipment.getAll);
    return httpRequest({ url, method: 'GET' });
  },
  getById: (id: string) => {
    const url = buildUrl(routes.equipment.getById, { id });
    return httpRequest({ url, method: 'GET' });
  },
  update: (id: string, data: any) => {
    const url = buildUrl(routes.equipment.update, { id });
    return httpRequest({ url, method: 'PUT', data });
  },
  delete: (id: string) => {
    const url = buildUrl(routes.equipment.delete, { id });
    return httpRequest({ url, method: 'DELETE' });
  }
};
