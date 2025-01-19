'use client';

import { EditTransferModal } from '@/components/modals/edit-transfer-modal';
import { Transfer } from '@/types/transfer';

interface MenuContentProps {
  item: Transfer;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const transferData = {
    id_sender: item.sender.id,
    id_receiver: item.receiver.id,
    id_equipment: item.equipment.id,
    id_dep_origin: item.origin_dep.id,
    id_dep_receiver: item.receiver_dep.id,
    status: item.status
  };

  return (
    <div className="flex space-x-2">
      <EditTransferModal {...{ transferData }} />
    </div>
  );
};
