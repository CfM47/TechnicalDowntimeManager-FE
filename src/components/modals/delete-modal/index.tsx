import { Loader2 } from 'lucide-react';
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
  const [submitting, setSubmitting] = useState(false);
  const title = 'Delete';
  const triggerProps: ButtonProps = removeModalButtonProps;
  const router = useRouter();
  const bodyContent = (
    <p>Are you sure you want to delete this entity? This action cannot be undone</p>
  );

  const onClick = () => {
    setSubmitting(true);
    handleDelete()
      .then(() => {
        showToast('success', 'Entity deleted successfully');
        setOpen(false);
        router.refresh();
      })
      .catch(() => {
        showToast('error', 'An error occurred while deleting the entity');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const footerContent = (
    <>
      <Button className="bg-gray-200 hover:bg-gray-100 text-black" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button className="bg-red-600 hover:bg-red-500" onClick={onClick}>
        {submitting ? <Loader2 className="animate-spin" /> : 'Confirm'}
      </Button>
    </>
  );

  return (
    <Modal {...{ title, triggerProps, bodyContent, footerContent, open, onOpenChange: setOpen }} />
  );
};
