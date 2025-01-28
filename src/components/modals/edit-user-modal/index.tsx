'use client';

import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditUserForm } from '@/components/forms/edit-user';
import { User } from '@/types/user';

export interface EditUserModalProps {
  item: User;
}

export const EditUserModal = ({ item }: EditUserModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Update user';
  const triggerProps = editModalButtonProps;
  const description = 'Update the user information below';
  const bodyContent = <EditUserForm {...{ setOpen, item }} />;

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
