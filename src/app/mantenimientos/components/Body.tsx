import { ReactNode } from 'react';

import { RowDropdownMenu } from '../../components/RowDropdownMenu';

import { TableCell, TableRow } from '@/components/ui/table';
import { Maintenance } from '@/types/maitenance';

interface BodyProps {
  data: Array<Maintenance>;
  menuContent: ReactNode;
}

export const Body = ({ data, menuContent }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.id_technician}</TableCell>
          <TableCell>{item.id_equipment}</TableCell>
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
