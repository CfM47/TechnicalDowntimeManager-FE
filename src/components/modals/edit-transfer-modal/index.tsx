import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditTransferForm } from '@/components/forms/edit-transfer';
import { Transfer } from '@/types/transfer';

interface EditTransferModalProps {
  item: Transfer;
}

export const EditTransferModal = ({ item }: EditTransferModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar traslado';
  const triggerProps = editModalButtonProps;
  const description = 'Edita la información de un traslado';
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
