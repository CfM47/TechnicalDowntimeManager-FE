import { httpRequest } from '@/services/api';
import { routes } from '@/services/routes/routes';
import { buildUrl } from '@/services/routes/utils';

export const MaintenanceServices = {
  create: (data: any) => {
    const url = buildUrl(routes.maintenance.create);
    return httpRequest({ url, method: 'POST', data });
  },
  getAll: () => {
    const url = buildUrl(routes.maintenance.getAll);
    return httpRequest({ url, method: 'GET' });
  },
  getById: (id_technician: string, id_equipment: string, date: string) => {
    const url = buildUrl(routes.maintenance.getById, { id_technician, id_equipment, date });
    return httpRequest({ url, method: 'GET' });
  },
  update: (id_technician: string, id_equipment: string, date: string, data: any) => {
    const url = buildUrl(routes.maintenance.update, { id_technician, id_equipment, date });
    return httpRequest({ url, method: 'PUT', data });
  },
  delete: (id_technician: string, id_equipment: string, date: string) => {
    const url = buildUrl(routes.maintenance.delete, { id_technician, id_equipment, date });
    return httpRequest({ url, method: 'DELETE' });
  }
};
