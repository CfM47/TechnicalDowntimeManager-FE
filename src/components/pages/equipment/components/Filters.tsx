'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { EquipmentTypes } from '@/lib/enums';
import { EquipmentStatuses } from '@/lib/enums';
import { EquipmentQuery } from '@/types/equipment';

export const Filters = () => {
  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });
  const { hotUpdateFilterValue } = useFilters<Omit<EquipmentQuery, 'id'>>({
    initialValue: {}
  });

  const handleChange = (key: keyof Omit<EquipmentQuery, 'id'>, value: string) => {
    hotUpdateFilterValue(key, value === defaultOption.value ? undefined : value);
  };

  const defaultOption = { value: '_', label: 'None' };

  const departmentsOptions = [
    defaultOption,
    ...departments.map((x) => ({ value: x.id, label: x.name }))
  ];
  const typesOptions = [defaultOption, ...EquipmentTypes.map((x) => ({ value: x, label: x }))];
  const statusOptions = [defaultOption, ...EquipmentStatuses.map((x) => ({ value: x, label: x }))];

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <OptionsSelect
        options={typesOptions}
        onValueChange={(value) => handleChange('type', value)}
        label="Type"
      />
      <OptionsSelect
        options={statusOptions}
        onValueChange={(value) => handleChange('status', value)}
        label="Status"
      />
      <OptionsSelect
        options={departmentsOptions}
        onValueChange={(value) => handleChange('id_department', value)}
        label="Department"
      />
    </div>
  );
};
