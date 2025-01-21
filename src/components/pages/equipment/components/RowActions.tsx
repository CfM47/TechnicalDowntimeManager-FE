'use client';

import { DeleteModal } from '@/components/modals/delete-modal';
import { EditEquipmentModal } from '@/components/modals/edit-equipment-modal';
import { EquipmentServices } from '@/services/features/equipment';
import { Equipment } from '@/types/equipment';

interface MenuContentProps {
  item: Equipment;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const handleDelete = async () => {
    await EquipmentServices.delete(item.id);
  };

  return (
    <div className="flex space-x-2">
      <EditEquipmentModal {...{ item }} />
      <DeleteModal {...{ handleDelete }} />
    </div>
  );
};
