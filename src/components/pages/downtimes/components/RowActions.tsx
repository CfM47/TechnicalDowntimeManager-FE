'use client';

import { EditDowntimeModal } from '@/components/modals/edit-downtime-modal';
import { Downtime } from '@/types/downtime';

interface MenuContentProps {
  item: Downtime;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const downtimeData = {
    id_sender: item.sender.id,
    id_receiver: item.receiver.id,
    id_equipment: item.equipment.id,
    id_dep_receiver: item.dep_receiver.id,
    status: item.status,
    cause: item.cause
  };

  return (
    <div className="flex space-x-2">
      <EditDowntimeModal {...{ downtimeData }} />
    </div>
  );
};
