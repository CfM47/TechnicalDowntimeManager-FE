'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { CreateDowntimeForm } from '@/components/forms/create-downtime';
import { ButtonProps } from '@/components/ui/button';

export const CreateDowntimeModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Create new downtime';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Add' };
  const description = 'Register a new downtime event on the system';
  const bodyContent = <CreateDowntimeForm {...{ setOpen }} />;

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
