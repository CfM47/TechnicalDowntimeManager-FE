'use client';

import { EditUserModal } from '@/components/modals/edit-user-modal';
import { User } from '@/types/user';

interface MenuContentProps {
  item: User;
}

export const RowActions = ({ item }: MenuContentProps) => {
  return (
    <div className="flex space-x-2">
      <EditUserModal {...{ item }} />
    </div>
  );
};
