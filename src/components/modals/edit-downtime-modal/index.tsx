import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditDowntimeForm, EditDowntimeFormValues } from '@/components/forms/edit-downtime';

interface EditDowntimeModalProps {
  downtimeData: EditDowntimeFormValues;
}

export const EditDowntimeModal = ({ downtimeData }: EditDowntimeModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar baja técnica';
  const triggerProps = editModalButtonProps;
  const description = 'Edita la información de una baja técnica';
  const bodyContent = <EditDowntimeForm {...{ setOpen, downtimeData }} />;
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
