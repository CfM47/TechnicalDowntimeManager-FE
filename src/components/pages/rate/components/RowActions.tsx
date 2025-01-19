'use client';

import { EditRateModal } from '@/components/modals/edit-rate-modal';
import { Rate } from '@/types/rate';

interface MenuContentProps {
  item: Rate;
}

export const RowActions = ({ item }: MenuContentProps) => {
  const rateData = {
    technician: item.technician.id,
    user: item.user.id,
    date: item.date,
    comment: item.comment,
    score: item.score
  };

  return (
    <div className="flex space-x-2">
      <EditRateModal {...{ rateData }} />
    </div>
  );
};
