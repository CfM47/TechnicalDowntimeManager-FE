import { Router } from './types';

const departmentRoutes: Router = {
  create: { path: '/departments', method: 'POST' },
  getAll: { path: '/departments', method: 'GET' },
  getById: { path: '/departments/:id', method: 'GET' },
  update: { path: '/departments/:id', method: 'PUT' },
  delete: { path: '/departments/:id', method: 'DELETE' }
};

const downtimeRoutes: Router = {
  create: { path: '/downtime', method: 'POST' },
  getAll: { path: '/downtime', method: 'GET' },
  getById: {
    path: '/downtime/:id_sender/:id_receiver/:id_equipment/:date/:id_dep_receiver',
    method: 'GET'
  },
  update: {
    path: '/downtime/:id_sender/:id_receiver/:id_equipment/:date/:id_dep_receiver',
    method: 'PUT'
  },
  delete: {
    path: '/downtime/:id_sender/:id_receiver/:id_equipment/:date/:id_dep_receiver',
    method: 'DELETE'
  }
};

const maintenanceRoutes: Router = {
  create: { path: '/maintenance', method: 'POST' },
  getAll: { path: '/maintenance', method: 'GET' },
  getById: {
    path: '/maintenance/:id_technician/:id_equipment/:date',
    method: 'GET'
  },
  update: {
    path: '/maintenance/:id_technician/:id_equipment/:date',
    method: 'PUT'
  },
  delete: {
    path: '/maintenance/:id_technician/:id_equipment/:date',
    method: 'DELETE'
  }
};

const rateRoutes: Router = {
  create: { path: '/rate', method: 'POST' },
  getAll: { path: '/rate', method: 'GET' },
  getById: {
    path: '/rate/:id_technician/:id_user/:date',
    method: 'GET'
  },
  update: {
    path: '/rate/:id_technician/:id_user/:date',
    method: 'PUT'
  },
  delete: {
    path: '/rate/:id_technician/:id_user/:date',
    method: 'DELETE'
  }
};

const roleRoutes: Router = {
  create: { path: '/rate', method: 'POST' },
  getAll: { path: '/rate', method: 'GET' },
  getById: { path: '/rate/:id', method: 'GET' },
  update: { path: '/rate/:id', method: 'PUT' },
  delete: { path: '/rate/:id', method: 'DELETE' }
};

const technicianRoutes: Router = {
  create: { path: '/technician', method: 'POST' },
  getAll: { path: '/technician', method: 'GET' },
  getById: { path: '/technician/:id', method: 'GET' },
  update: { path: '/technician/:id', method: 'PUT' },
  delete: { path: '/technician/:id', method: 'DELETE' }
};

const transferRoutes: Router = {
  create: { path: '/transfer', method: 'POST' },
  getAll: { path: '/transfer', method: 'GET' },
  getById: {
    path: '/transfer/:id_sender/:id_receiver/:id_equipment/:date/:id_origin_dep/:id_receiver_dep',
    method: 'GET'
  },
  update: {
    path: '/transfer/:id_sender/:id_receiver/:id_equipment/:date/:id_origin_dep/:id_receiver_dep',
    method: 'PUT'
  },
  delete: {
    path: '/transfer/:id_sender/:id_receiver/:id_equipment/:date/:id_origin_dep/:id_receiver_dep',
    method: 'DELETE'
  }
};

const userRoutes: Router = {
  create: { path: '/user', method: 'POST' },
  getAll: { path: '/user', method: 'GET' },
  getById: { path: '/user/:id', method: 'GET' },
  update: { path: '/user/:id', method: 'PUT' },
  delete: { path: '/user/:id', method: 'DELETE' }
};

const equipmentRoutes: Router = {
  create: { path: '/equipment', method: 'POST' },
  getAll: { path: '/equipment', method: 'GET' },
  getById: { path: '/equipment/:id', method: 'GET' },
  update: { path: '/equipment/:id', method: 'PUT' },
  delete: { path: '/equipment/:id', method: 'DELETE' }
};

export const routes: Record<string, Router> = {
  department: departmentRoutes,
  downtime: downtimeRoutes,
  maintenance: maintenanceRoutes,
  rate: rateRoutes,
  role: roleRoutes,
  technician: technicianRoutes,
  transfer: transferRoutes,
  user: userRoutes,
  equipment: equipmentRoutes
};
