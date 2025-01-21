import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditDowntimeForm } from '@/components/forms/edit-downtime';
import { Downtime } from '@/types/downtime';

interface EditDowntimeModalProps {
  item: Downtime;
}

export const EditDowntimeModal = ({ item }: EditDowntimeModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar baja técnica';
  const triggerProps = editModalButtonProps;
  const description = 'Edita la información de una baja técnica';
  const bodyContent = <EditDowntimeForm {...{ setOpen, item }} />;
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
