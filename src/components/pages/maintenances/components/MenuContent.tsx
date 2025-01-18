'use client';

import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Maintenance } from '@/types/maitenance';

interface MenuContentProps {
  item: Maintenance;
}

export const MenuContent = ({}: MenuContentProps) => {
  const options = [
    { label: 'Editar', action: () => Promise.resolve() },
    { label: 'Eliminar', action: () => Promise.resolve() },
    { label: 'Detalles', action: () => Promise.resolve() }
  ];

  return (
    <>
      {options.map((option, index) => (
        <DropdownMenuItem key={index} onClick={option.action}>
          {option.label}
        </DropdownMenuItem>
      ))}
    </>
  );
};
