'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { CreateEquipmentForm } from '@/components/forms/create-equipment';
import { ButtonProps } from '@/components/ui/button';

export const CreateEquipmentModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Crear equipo';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Añadir' };
  const description = 'Registra un nuevo equipo en el sistema';
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
