import { ReactNode } from 'react';

import { RowDropdownMenu } from '../../../common/row-dropdown-menu';

import { TableCell, TableRow } from '@/components/ui/table';
import { Maintenance } from '@/types/maitenance';

interface BodyProps {
  data: Array<Maintenance>;
  menuContent: ReactNode;
}

export const Body = ({ data = [], menuContent }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.technician.name}</TableCell>
          <TableCell>{item.equipment.name}</TableCell>
          <TableCell>{item.cost}</TableCell>
          <TableCell>{item.type}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>
            <RowDropdownMenu {...{ menuContent }} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
