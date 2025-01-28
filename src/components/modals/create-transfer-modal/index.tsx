'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { CreateTransferForm } from '@/components/forms/create-transfer';
import { ButtonProps } from '@/components/ui/button';

export const CreateTransferModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Create Transfer';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Add' };
  const description = 'Register a new equipment transfer.';
  const bodyContent = <CreateTransferForm {...{ setOpen }} />;

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
