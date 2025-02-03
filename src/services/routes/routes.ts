import { Router } from './types';

const departmentRoutes: Router = {
  create: { path: '/department', method: 'POST' },
  getAll: { path: '/department', method: 'GET' },
  getById: { path: '/department/:id', method: 'GET' },
  update: { path: '/department/:id', method: 'PUT' },
  delete: { path: '/department/:id', method: 'DELETE' }
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
  },
  lastYear: {
    path: '/downtime/last-year',
    method: 'GET'
  },
  lastYearReport: {
    path: '/downtime/last-year/report',
    method: 'GET'
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
  },
  equipmentHistoryReport: {
    path: '/maintenance/equipment-history/report',
    method: 'GET'
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

const technicianRoutes: Router = {
  create: { path: '/technician', method: 'POST' },
  getAll: { path: '/technician', method: 'GET' },
  getById: { path: '/technician/:id', method: 'GET' },
  update: { path: '/technician/:id', method: 'PUT' },
  delete: { path: '/technician/:id', method: 'DELETE' },
  performance: { path: '/technician/performance', method: 'GET' },
  interventions: { path: '/technician/:id/interventions', method: 'GET' },
  interventionsReport: {
    path: '/technician/:id/interventions/report',
    method: 'GET'
  },
  performanceReport: {
    path: '/technician/performance/report',
    method: 'GET'
  }
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
  },
  equipmentRecordReport: {
    path: '/transfer/equipment-record/report',
    method: 'GET'
  },
  departmentRecordReport: {
    path: '/transfer/department-record/report',
    method: 'GET'
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
  delete: { path: '/equipment/:id', method: 'DELETE' },
  maintenancesLastYear: { path: '/equipment/maintenances-last-year', method: 'GET' },
  maintenancesLastYearReport: {
    path: '/equipment/maintenances-last-year/report',
    method: 'GET'
  }
};

const authRoutes: Router = {
  signin: { path: '/auth/signin', method: 'POST' }
};

const formatRoutes: Router = {
  availableFormats: { path: '/available-export-formats', method: 'GET' }
};

export const routes: Record<string, Router> = {
  department: departmentRoutes,
  downtime: downtimeRoutes,
  maintenance: maintenanceRoutes,
  rate: rateRoutes,
  technician: technicianRoutes,
  transfer: transferRoutes,
  user: userRoutes,
  equipment: equipmentRoutes,
  auth: authRoutes,
  format: formatRoutes
};
