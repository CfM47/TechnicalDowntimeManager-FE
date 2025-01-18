'use client';

import { EditUserModal } from '@/components/modals/edit-user-modal';
import { User } from '@/types/user';

interface MenuContentProps {
  item: User;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const userData = {
    name: item.name,
    id_department: item.department.id,
    id_role: item.role.id
  };

  return (
    <div className="flex space-x-2">
      <EditUserModal {...{ userData }} />
    </div>
  );
};
