'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { CreateMaintenanceForm } from '@/components/forms/create-maintenance';
import { ButtonProps } from '@/components/ui/button';

export const CreateMaintenanceModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Crear nuevo mantenimiento';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Añadir' };
  const description = 'Registra un nuevo mantenimiento en el sistema';
  const bodyContent = <CreateMaintenanceForm {...{ setOpen }} />;

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
