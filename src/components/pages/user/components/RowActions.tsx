'use client';

import { DeleteModal } from '@/components/modals/delete-modal';
import { EditUserModal } from '@/components/modals/edit-user-modal';
import { UserServices } from '@/services/features/user';
import { User } from '@/types/user';

interface MenuContentProps {
  item: User;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const handleDelete = async () => {
    await UserServices.delete(item.id);
  };

  return (
    <div className="flex space-x-2">
      <EditUserModal {...{ item }} />
      <DeleteModal {...{ handleDelete }} />
    </div>
  );
};
