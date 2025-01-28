'use client';

import { useState } from 'react';

import { editModalButtonProps, Modal } from '@/components/common/modal';
import { EditEquipmentForm } from '@/components/forms/edit-equipment';
import { Equipment } from '@/types/equipment';

export interface EditEquipmentModalProps {
  item: Equipment;
}

export const EditEquipmentModal = ({ item }: EditEquipmentModalProps) => {
  const [open, setOpen] = useState(false);

  const title = 'Update Equipment';
  const triggerProps = editModalButtonProps;
  const description = 'Update the equipment information below';
  const bodyContent = <EditEquipmentForm {...{ setOpen, item }} />;

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
