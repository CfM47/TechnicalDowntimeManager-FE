import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

interface ModalProps {
  triggerLabel: string;
  title?: string;
  description?: string;
  bodyContent: React.ReactNode;
  footerContent: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({
  title,
  triggerLabel,
  description,
  bodyContent,
  footerContent,
  onClose
}: ModalProps) => {
  return (
    <Dialog onOpenChange={onClose}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-white  bg-black hover:bg-gray-800 hover:text-white"
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">{bodyContent}</div>
        <DialogFooter>{footerContent}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
