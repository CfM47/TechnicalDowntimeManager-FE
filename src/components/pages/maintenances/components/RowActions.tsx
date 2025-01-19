'use client';

import { EditMaintenanceModal } from '@/components/modals/edit-maintenance-modal';
import { Maintenance } from '@/types/maitenance';

interface MenuContentProps {
  item: Maintenance;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const maintenanceData = {
    id_technician: item.technician.id,
    id_equipment: item.equipment.id,
    type: item.type,
    cost: item.cost
  };

  return (
    <div className="flex space-x-2">
      <EditMaintenanceModal {...{ maintenanceData }} />
    </div>
  );
};
