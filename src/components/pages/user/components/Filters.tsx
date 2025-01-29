'use client';

import { OptionsSelect } from '@/components/common/option-select';
import { Input } from '@/components/ui/input';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { useFilters } from '@/hooks/useFilters';
import { Roles } from '@/lib/enums';
import { UserQuery } from '@/types/user';

export const Filters = () => {
  const { departments } = useFetchOptions({ selectFrom: ['DEPARTMENT'] });
  const { hotUpdateFilterValue } = useFilters<Omit<UserQuery, 'id'>>({
    initialValue: {}
  });

  const handleChange = (key: string, value: string) => {
    hotUpdateFilterValue(key, value === defaultOption.value ? undefined : value);
  };

  const defaultOption = { value: '_', label: 'None' };

  const departmentOptions = [
    defaultOption,
    ...departments.map((x) => ({ value: x.id, label: x.name }))
  ];
  const roleOptions = [defaultOption, ...Roles.map((x) => ({ value: x, label: x }))];

  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-start md:space-x-3 md:space-y-0">
      <div className="flex items-center space-x-2 w-full">
        <p className="w-[100px]">Name :</p>
        <Input onChange={(e) => handleChange('name', e.target.value)} />
      </div>
      <OptionsSelect
        options={departmentOptions}
        onValueChange={(value) => handleChange('id_department', value)}
        label="Department :"
      />
      <OptionsSelect
        options={roleOptions}
        onValueChange={(value) => handleChange('role', value)}
        label="Role :"
      />
    </div>
  );
};
