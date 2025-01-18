'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { CreateDowntimeForm } from '@/components/forms/create-downtime';
import { ButtonProps } from '@/components/ui/button';

export const CreateDowntimeModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Crear nueva baja';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Añadir' };
  const description = 'Registra una nueva baja en el sistema';
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
