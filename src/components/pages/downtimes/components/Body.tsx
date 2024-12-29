import { ReactNode } from 'react';

import { RowDropdownMenu } from '../../../common/row-dropdown-menu';

import { TableCell, TableRow } from '@/components/ui/table';
import { Downtime } from '@/types/downtime';

interface BodyProps {
  data: Array<Downtime>;
  menuContent: ReactNode;
}

export const Body = ({ data, menuContent }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.id_sender}</TableCell>
          <TableCell>{item.id_equipment}</TableCell>
          <TableCell>{item.id_dep_receiver}</TableCell>
          <TableCell>{item.id_receiver}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>
            <RowDropdownMenu {...{ menuContent }} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
