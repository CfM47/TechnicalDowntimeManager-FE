/* eslint-disable react-refresh/only-export-components */
import { Pencil, Trash2 } from 'lucide-react';
import React from 'react';

import { Button, ButtonProps } from '@/components/ui/button';
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
  triggerProps: ButtonProps;
  title?: string;
  description?: string;
  bodyContent: React.ReactNode;
  footerContent?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Modal = ({
  title,
  triggerProps,
  description,
  bodyContent,
  footerContent,
  open,
  onOpenChange
}: ModalProps) => {
  return (
    <Dialog {...{ open, onOpenChange }}>
      <DialogTrigger asChild>
        <Button {...triggerProps} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[95vh] overflow-y-auto scrollbar-hide">
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

export const regularModalButtonProps: ButtonProps = {
  variant: 'outline',
  className: 'text-white bg-black hover:bg-gray-800 hover:text-white'
};

export const editModalButtonProps: ButtonProps = {
  size: 'icon',
  variant: 'outline',
  className:
    'text--black border-transparent rounded-full hover:text-blue-600 hover:border-blue-600 transition-colors',
  children: (
    <>
      <Pencil className="h-2 w-2" />
      <span className="sr-only">Editar</span>
    </>
  )
};

export const removeModalButtonProps: ButtonProps = {
  size: 'icon',
  variant: 'outline',
  className:
    'text-red-500 border-transparent rounded-full hover:text-red-600 hover:border-red-600 transition-colors',
  children: (
    <>
      <Trash2 className="h-2 w-2" />
      <span className="sr-only">Eliminar</span>
    </>
  )
};
