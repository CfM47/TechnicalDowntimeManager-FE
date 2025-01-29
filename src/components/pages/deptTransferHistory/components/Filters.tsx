'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { TransferQuery } from '@/types/transfer';

export const Filters = () => {
  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });
  const { hotUpdateFilterValue } = useFilters<
    Pick<TransferQuery, 'id_receiver_dep' | 'page' | 'size'>
  >({
    initialValue: {
      id_receiver_dep: undefined,
      page: 1,
      size: 10
    }
  });

  const handleChange = (key: 'id_receiver_dep' | 'page' | 'size', value: string | number) => {
    hotUpdateFilterValue(key, value === defaultOption.value ? undefined : value);
  };

  const defaultOption = { value: '_', label: 'None' };

  const departmentsOptions = [
    defaultOption,
    ...departments.map((x) => ({ value: x.id, label: x.name }))
  ];

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <OptionsSelect
        options={departmentsOptions}
        onValueChange={(value) => handleChange('id_receiver_dep', value)}
        label="Select Department :"
      />
    </div>
  );
};
