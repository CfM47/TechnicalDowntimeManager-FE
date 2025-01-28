import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditDowntimeForm } from '@/components/forms/edit-downtime';
import { Downtime } from '@/types/downtime';

interface EditDowntimeModalProps {
  item: Downtime;
}

export const EditDowntimeModal = ({ item }: EditDowntimeModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Update Downtime';
  const triggerProps = editModalButtonProps;
  const description = 'Update the downtime information below';
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
