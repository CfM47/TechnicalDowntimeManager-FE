import { ReactNode } from 'react';

import { RowDropdownMenu } from '../../../common/row-dropdown-menu';

import { TableCell, TableRow } from '@/components/ui/table';
import { Downtime } from '@/types/downtime';

interface BodyProps {
  data: Array<Downtime>;
  menuContent: ReactNode;
}

export const Body = ({ data = [], menuContent }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.sender.name}</TableCell>
          <TableCell>{item.equipment.name}</TableCell>
          <TableCell>{item.dep_receiver.name}</TableCell>
          <TableCell>{item.receiver.name}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>
            <RowDropdownMenu {...{ menuContent }} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
