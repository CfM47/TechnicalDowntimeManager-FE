'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';

export const Filters = () => {
  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });
  return (
    <div>
      <OptionsSelect options={departments.map((x) => ({ value: x.id, label: x.name }))} />
    </div>
  );
};
