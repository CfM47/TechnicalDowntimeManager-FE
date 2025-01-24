import { useState } from 'react';

import { Modal, removeModalButtonProps } from '@/components/common/modal';
import { showToast } from '@/components/common/toast-message';
import { Button, ButtonProps } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface DeleteModalProps {
  handleDelete: () => Promise<void>;
}

export const DeleteModal = ({ handleDelete }: DeleteModalProps) => {
  const [open, setOpen] = useState(false);
  const title = 'Eliminar';
  const triggerProps: ButtonProps = removeModalButtonProps;
  const router = useRouter();
  const bodyContent = (
    <p>Está seguro que desea elminar esta entidad. Esta acción no puede deshacerse</p>
  );

  const onClick = () => {
    handleDelete()
      .then(() => {
        showToast('success', 'Entidad eliminada correctamente');
        setOpen(false);
        router.refresh();
      })
      .catch(() => {
        showToast('error', 'Ha ocurrido un error al eliminar la entidad');
      });
  };

  const footerContent = (
    <>
      <Button className="bg-gray-200 hover:bg-gray-100 text-black" onClick={() => setOpen(false)}>
        Cancelar
      </Button>
      <Button className="bg-red-600 hover:bg-red-500" onClick={onClick}>
        Confirmar
      </Button>
    </>
  );

  return (
    <Modal {...{ title, triggerProps, bodyContent, footerContent, open, onOpenChange: setOpen }} />
  );
};
