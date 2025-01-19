'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { CreateRateForm } from '@/components/forms/create-rate';
import { ButtonProps } from '@/components/ui/button';

export const CreateRateModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Crear nueva valoración';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Añadir' };
  const description = 'Registra una nueva valoración en el sistema';
  const bodyContent = <CreateRateForm {...{ setOpen }} />;

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
