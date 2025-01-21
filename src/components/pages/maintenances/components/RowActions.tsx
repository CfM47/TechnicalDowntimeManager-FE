'use client';

import { DeleteModal } from '@/components/modals/delete-modal';
import { EditMaintenanceModal } from '@/components/modals/edit-maintenance-modal';
import { MaintenanceServices } from '@/services/features/maintenance';
import { Maintenance } from '@/types/maitenance';

interface MenuContentProps {
  item: Maintenance;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const handleDelete = async () => {
    await MaintenanceServices.delete(item.technician.id, item.equipment.id, item.date);
  };

  return (
    <div className="flex space-x-2">
      <EditMaintenanceModal {...{ item }} />
      <DeleteModal {...{ handleDelete }} />
    </div>
  );
};
