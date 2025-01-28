import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditTransferForm } from '@/components/forms/edit-transfer';
import { Transfer } from '@/types/transfer';

interface EditTransferModalProps {
  item: Transfer;
}

export const EditTransferModal = ({ item }: EditTransferModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Update transfer';
  const triggerProps = editModalButtonProps;
  const description = 'Update the transfer information below';
  const bodyContent = <EditTransferForm {...{ setOpen, item }} />;
  return (
    <Modal
      {...{
        title,
        triggerProps,
        description,
        bodyContent,
        open,
        onOpenChange: setOpen
      }}
    />
  );
};
