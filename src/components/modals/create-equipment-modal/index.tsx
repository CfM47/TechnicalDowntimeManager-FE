'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { CreateEquipmentForm } from '@/components/forms/create-equipment';
import { ButtonProps } from '@/components/ui/button';

export const CreateEquipmentModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Create equipment';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Add' };
  const description = 'Register a new equipment on the system';
  const bodyContent = <CreateEquipmentForm {...{ setOpen }} />;

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
