'use client';

import { DeleteModal } from '@/components/modals/delete-modal';
import { EditTransferModal } from '@/components/modals/edit-transfer-modal';
import { TransferServices } from '@/services/features/transfer';
import { Transfer } from '@/types/transfer';

interface MenuContentProps {
  item: Transfer;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const handleDelete = async () => {
    await TransferServices.delete(
      item.sender.id,
      item.receiver.id,
      item.equipment.id,
      item.date,
      item.origin_dep.id,
      item.receiver_dep.id
    );
  };

  return (
    <div className="flex space-x-2">
      <EditTransferModal {...{ item }} />
      <DeleteModal {...{ handleDelete }} />
    </div>
  );
};
