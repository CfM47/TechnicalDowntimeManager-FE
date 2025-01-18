'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { CreateUserForm } from '@/components/forms/create-user';
import { ButtonProps } from '@/components/ui/button';

export const CreateUserModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Crear usuario';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Añadir' };
  const description = 'Registra un nuevo usuario en el sistema';
  const bodyContent = <CreateUserForm {...{ setOpen }} />;

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
