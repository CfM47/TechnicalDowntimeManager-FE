'use client';

import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditMaintenanceForm } from '@/components/forms/edit-maintenance';
import { Maintenance } from '@/types/maitenance';

export interface EditMaintenanceModalProps {
  item: Maintenance;
}

export const EditMaintenanceModal = ({ item }: EditMaintenanceModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar mantenimiento';
  const triggerProps = editModalButtonProps;
  const description = 'Edita la información del mantenimiento';
  const bodyContent = <EditMaintenanceForm {...{ setOpen, item }} />;

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
