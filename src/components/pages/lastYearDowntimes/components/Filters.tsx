'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { DowntimeQuery } from '@/types/downtime';

export const Filters = () => {
  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });
  const { users } = useFetchOptions({ selectFrom: ['USER'] });
  const { hotUpdateFilterValue } = useFilters<Omit<DowntimeQuery, 'id'>>({
    initialValue: {}
  });

  const handleChange = (key: string, value: string) => {
    hotUpdateFilterValue(key, value === defaultOption.value ? undefined : value);
  };

  const defaultOption = { value: '_', label: 'None' };

  const departmentsOptions = [
    defaultOption,
    ...departments.map((x) => ({ value: x.id, label: x.name }))
  ];
  const usersOptions = [defaultOption, ...users.map((x) => ({ value: x.id, label: x.name }))];

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <OptionsSelect
        options={usersOptions}
        onValueChange={(value) => handleChange('id_sender', value)}
        label="Sender"
      />
      <OptionsSelect
        options={usersOptions}
        onValueChange={(value) => handleChange('id_receiver', value)}
        label="Receiver"
      />
      <OptionsSelect
        options={departmentsOptions}
        onValueChange={(value) => handleChange('id_dep_receiver', value)}
        label="Department"
      />
    </div>
  );
};
