'use client';

import { DeleteModal } from '@/components/modals/delete-modal';
import { EditRateModal } from '@/components/modals/edit-rate-modal';
import { RateServices } from '@/services/features/rate';
import { Rate } from '@/types/rate';

interface MenuContentProps {
  item: Rate;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const handleDelete = async () => {
    await RateServices.delete(item.technician.id, item.user.id, item.date);
  };

  return (
    <div className="flex space-x-2">
      <EditRateModal {...{ item }} />
      <DeleteModal {...{ handleDelete }} />
    </div>
  );
};
