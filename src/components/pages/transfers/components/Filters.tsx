'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { TransferQuery } from '@/types/transfer';

export const Filters = () => {
  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });
  const { users } = useFetchOptions({ selectFrom: ['USER'] });
  const { hotUpdateFilterValue } = useFilters<Omit<TransferQuery, 'id'>>({
    initialValue: {}
  });

  const handleChange = (key: keyof TransferQuery, value: string) => {
    hotUpdateFilterValue(key, value === defaultOption.value ? undefined : value);
  };

  const defaultOption = { value: '_', label: 'None' };

  const departmentOptions = [
    defaultOption,
    ...departments.map((x) => ({ value: x.id, label: x.name }))
  ];
  const userOptions = [defaultOption, ...users.map((x) => ({ value: x.id, label: x.name }))];

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <OptionsSelect
        options={departmentOptions}
        onValueChange={(value) => handleChange('id_receiver_dep', value)}
        label="Department :"
      />
      <OptionsSelect
        options={userOptions}
        onValueChange={(value) => handleChange('id_sender', value)}
        label="Sender :"
      />
      <OptionsSelect
        options={userOptions}
        onValueChange={(value) => handleChange('id_receiver', value)}
        label="Receiver :"
      />
    </div>
  );
};
