import { ReactNode } from 'react';

import { RowDropdownMenu } from '../../../common/row-dropdown-menu';

import { TableCell, TableRow } from '@/components/ui/table';
import { Equipment } from '@/types/equipment';

interface BodyProps {
  data: Array<Equipment>;
  menuContent: ReactNode;
}

export const Body = ({ data = [], menuContent }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.type}</TableCell>
          <TableCell>{item.state}</TableCell>
          <TableCell>{item.department.name}</TableCell>
          <TableCell>{item.acquisition_date}</TableCell>
          <TableCell>
            <RowDropdownMenu {...{ menuContent }} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
