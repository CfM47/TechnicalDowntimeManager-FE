'use client';

import { EditTransferModal } from '@/components/modals/edit-transfer-modal';
import { Transfer } from '@/types/transfer';

interface MenuContentProps {
  item: Transfer;
}

export const RowActions = ({ item }: MenuContentProps) => {
  return (
    <div className="flex space-x-2">
      <EditTransferModal {...{ item }} />
    </div>
  );
};
