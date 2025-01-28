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

  const title = 'Update Maintenance';
  const triggerProps = editModalButtonProps;
  const description = 'Update the maintenance information below';
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
