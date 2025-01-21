'use client';

import { EditMaintenanceModal } from '@/components/modals/edit-maintenance-modal';
import { Maintenance } from '@/types/maitenance';

interface MenuContentProps {
  item: Maintenance;
}

export const RowActions = ({ item }: MenuContentProps) => {
  return (
    <div className="flex space-x-2">
      <EditMaintenanceModal {...{ item }} />
    </div>
  );
};
