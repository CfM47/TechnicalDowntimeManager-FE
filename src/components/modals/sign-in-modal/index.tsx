'use client';

import { useState } from 'react';

import { Modal, regularModalButtonProps } from '@/components/common/modal';
import { SigninForm } from '@/components/forms/sign-in';
import { ButtonProps } from '@/components/ui/button';

export const SigninModal = () => {
  const [open, setOpen] = useState(false);

  const title = 'Welcome';
  const triggerProps: ButtonProps = { ...regularModalButtonProps, children: 'Sign in' };
  const description = 'Enter your credentials to access the system';
  const bodyContent = <SigninForm {...{ setOpen }} />;

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
