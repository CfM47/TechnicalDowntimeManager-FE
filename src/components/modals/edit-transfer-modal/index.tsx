import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditTransferForm, EditTransferFormValues } from '@/components/forms/edit-transfer';

interface EditTransferModalProps {
  downtimeData: EditTransferFormValues;
}

export const EditTransferModal = ({ transferData }: EditTransferModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar traslado';
  const triggerProps = editModalButtonProps;
  const description = 'Edita la información de un traslado';
  const bodyContent = <EditTransferForm {...{ setOpen, transferData }} />;
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
