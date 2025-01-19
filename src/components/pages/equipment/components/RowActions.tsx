'use client';

import { EditEquipmentModal } from '@/components/modals/edit-equipment-modal';
import { Equipment } from '@/types/equipment';

interface MenuContentProps {
  item: Equipment;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const equipmentData = {
    name: item.name,
    type: item.type,
    state: item.state,
    id_department: item.department.id
  };

  return (
    <div className="flex space-x-2">
      <EditEquipmentModal {...{ equipmentData }} />
    </div>
  );
};
