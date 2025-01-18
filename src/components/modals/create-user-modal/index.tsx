'use client';

import { useState } from 'react';

import { Modal } from '@/components/common/modal';
import { CreateUserForm } from '@/components/forms/create-user';
// import { Button } from '@/components/ui/button';
// import { DialogClose, DialogTrigger } from '@/components/ui/dialog';
// import { usePortal } from '@/hooks/usePortal';

export const CreateUserModal = () => {
  // const portal = usePortal();
  const [open, setOpen] = useState(false);

  const title = 'Crear usuario';
  const triggerLabel = 'Añadir';
  const description = 'Registra un nuevo usuario en el sistema';
  const bodyContent = <CreateUserForm {...{ setOpen }} />;
  const footerContent = (
    <>
      {/* <DialogClose asChild>
        <Button type="button" variant="secondary">
          Close
        </Button>
      </DialogClose>
      <DialogTrigger asChild>
        <div ref={portal.ref} />
      </DialogClose> */}
    </>
  );

  return (
    <Modal
      {...{
        title,
        triggerLabel,
        description,
        bodyContent,
        footerContent,
        open,
        onOpenChange: setOpen
      }}
    />
  );
};
