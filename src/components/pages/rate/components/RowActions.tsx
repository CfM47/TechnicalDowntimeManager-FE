'use client';

import { EditRateModal } from '@/components/modals/edit-rate-modal';
import { Rate } from '@/types/rate';

interface MenuContentProps {
  item: Rate;
}

export const RowActions = ({ item }: MenuContentProps) => {
  return (
    <div className="flex space-x-2">
      <EditRateModal {...{ item }} />
    </div>
  );
};
