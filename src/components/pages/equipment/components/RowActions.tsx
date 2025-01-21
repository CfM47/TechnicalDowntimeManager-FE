'use client';

import { EditEquipmentModal } from '@/components/modals/edit-equipment-modal';
import { Equipment } from '@/types/equipment';

interface MenuContentProps {
  item: Equipment;
}

export const RowActions = ({ item }: MenuContentProps) => {
  return (
    <div className="flex space-x-2">
      <EditEquipmentModal {...{ item }} />
    </div>
  );
};
