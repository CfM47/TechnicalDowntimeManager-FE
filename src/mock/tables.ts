import { Downtime } from '@/types/downtime';
import { Maintenance } from '@/types/maitenance';
import { Transfer } from '@/types/transfer';

export const mockTransfers: Transfer[] = [
  {
    id_sender: 'user1',
    id_receiver: 'user2',
    id_equipment: 'eq1',
    date: '2023-10-01',
    id_origin_dep: 'dep1',
    id_receiver_dep: 'dep2',
    downtime_status: 'active'
  },
  {
    id_sender: 'user3',
    id_receiver: 'user4',
    id_equipment: 'eq2',
    date: '2023-10-02',
    id_origin_dep: 'dep3',
    id_receiver_dep: 'dep4',
    downtime_status: 'inactive'
  },
  {
    id_sender: 'user5',
    id_receiver: 'user6',
    id_equipment: 'eq3',
    date: '2023-10-03',
    id_origin_dep: 'dep5',
    id_receiver_dep: 'dep6',
    downtime_status: 'active'
  },
  {
    id_sender: 'user7',
    id_receiver: 'user8',
    id_equipment: 'eq4',
    date: '2023-10-04',
    id_origin_dep: 'dep7',
    id_receiver_dep: 'dep8',
    downtime_status: 'inactive'
  },
  {
    id_sender: 'user9',
    id_receiver: 'user10',
    id_equipment: 'eq5',
    date: '2023-10-05',
    id_origin_dep: 'dep9',
    id_receiver_dep: 'dep10',
    downtime_status: 'active'
  }
];

export const mockDowntimes: Downtime[] = [
  {
    id_sender: 'user1',
    id_receiver: 'user2',
    id_equipment: 'eq1',
    date: '2023-10-01',
    id_dep_receiver: 'dep1',
    status: 'active',
    cause: 'maintenance'
  },
  {
    id_sender: 'user3',
    id_receiver: 'user4',
    id_equipment: 'eq2',
    date: '2023-10-02',
    id_dep_receiver: 'dep3',
    status: 'inactive',
    cause: 'repair'
  },
  {
    id_sender: 'user5',
    id_receiver: 'user6',
    id_equipment: 'eq3',
    date: '2023-10-03',
    id_dep_receiver: 'dep5',
    status: 'active',
    cause: 'upgrade'
  },
  {
    id_sender: 'user7',
    id_receiver: 'user8',
    id_equipment: 'eq4',
    date: '2023-10-04',
    id_dep_receiver: 'dep7',
    status: 'inactive',
    cause: 'inspection'
  },
  {
    id_sender: 'user9',
    id_receiver: 'user10',
    id_equipment: 'eq5',
    date: '2023-10-05',
    id_dep_receiver: 'dep9',
    status: 'active',
    cause: 'maintenance'
  }
];

export const mockMaintenances: Maintenance[] = [
  {
    id_technician: 'tech1',
    id_equipment: 'eq1',
    date: '2023-10-01',
    type: 'preventive',
    cost: 100
  },
  {
    id_technician: 'tech2',
    id_equipment: 'eq2',
    date: '2023-10-02',
    type: 'corrective',
    cost: 200
  },
  {
    id_technician: 'tech3',
    id_equipment: 'eq3',
    date: '2023-10-03',
    type: 'predictive',
    cost: 150
  },
  {
    id_technician: 'tech4',
    id_equipment: 'eq4',
    date: '2023-10-04',
    type: 'preventive',
    cost: 120
  },
  {
    id_technician: 'tech5',
    id_equipment: 'eq5',
    date: '2023-10-05',
    type: 'corrective',
    cost: 180
  }
];
