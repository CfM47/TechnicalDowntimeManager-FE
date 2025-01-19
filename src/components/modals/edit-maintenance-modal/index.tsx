'use client';

import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import {
  EditMaintenanceForm,
  EditMaintenanceFormValues
} from '@/components/forms/edit-maintenance';

export interface EditMaintenanceModalProps {
  maintenanceData: EditMaintenanceFormValues;
}

export const EditMaintenanceModal = ({ maintenanceData }: EditMaintenanceModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar mantenimiento';
  const triggerProps = editModalButtonProps;
  const description = 'Edita la información del mantenimiento';
  const bodyContent = <EditMaintenanceForm {...{ setOpen, maintenanceData }} />;

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
