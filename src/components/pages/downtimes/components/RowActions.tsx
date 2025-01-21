'use client';

import { DeleteModal } from '@/components/modals/delete-modal';
import { EditDowntimeModal } from '@/components/modals/edit-downtime-modal';
import { DowntimeServices } from '@/services/features/downtime';
import { Downtime } from '@/types/downtime';

interface MenuContentProps {
  item: Downtime;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const handleDelete = async () => {
    await DowntimeServices.delete(
      item.sender.id,
      item.receiver.id,
      item.equipment.id,
      item.date,
      item.dep_receiver.id
    );
  };

  return (
    <div className="flex space-x-2">
      <EditDowntimeModal {...{ item }} />
      <DeleteModal {...{ handleDelete }} />
    </div>
  );
};
