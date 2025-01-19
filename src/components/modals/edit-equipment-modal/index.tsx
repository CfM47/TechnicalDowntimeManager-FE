'use client';

import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditEquipmentForm, EditEquipmentFormValues } from '@/components/forms/edit-equipment';

export interface EditEquipmentModalProps {
  userData: EditEquipmentFormValues;
}

export const EditEquipmentModal = ({ equipmentData }: EditEquipmentModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Editar equipo';
  const triggerProps = editModalButtonProps;
  const description = 'Edita la información del equipo';
  const bodyContent = <EditEquipmentForm {...{ setOpen, equipmentData }} />;

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
