'use client';

import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditUserForm, EditUserFormValues } from '@/components/forms/edit-user';

export interface EditUserModalProps {
  userData: EditUserFormValues;
}

export const EditUserModal = ({ userData }: EditUserModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar usuario';
  const triggerProps = editModalButtonProps;
  const description = 'Edita la información del usuario';
  const bodyContent = <EditUserForm {...{ setOpen, userData }} />;

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
