'use client';

import { EditDowntimeModal } from '@/components/modals/edit-downtime-modal';
import { Downtime } from '@/types/downtime';

interface MenuContentProps {
  item: Downtime;
}

export const RowActions = ({ item }: MenuContentProps) => {
  return (
    <div className="flex space-x-2">
      <EditDowntimeModal {...{ item }} />
    </div>
  );
};
