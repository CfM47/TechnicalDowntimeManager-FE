import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditRateForm } from '@/components/forms/edit-rate';
import { Rate } from '@/types/rate';

interface EditRateModalProps {
  item: Rate;
}

export const EditRateModal = ({ item }: EditRateModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar valoración';
  const triggerProps = editModalButtonProps;
  const description = 'Edita una valoración';
  const bodyContent = <EditRateForm {...{ setOpen, item }} />;
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
