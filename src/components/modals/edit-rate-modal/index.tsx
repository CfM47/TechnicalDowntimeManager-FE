import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditRateForm, EditRateFormValues } from '@/components/forms/edit-rate';

interface EditRateModalProps {
  downtimeData: EditRateFormValues;
}

export const EditRateModal = ({ rateData }: EditRateModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar valoración';
  const triggerProps = editModalButtonProps;
  const description = 'Edita una valoración';
  const bodyContent = <EditRateForm {...{ setOpen, rateData }} />;
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
