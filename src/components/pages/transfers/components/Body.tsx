import { ReactNode } from 'react';

import { RowDropdownMenu } from '../../../common/row-dropdown-menu';

import { TableCell, TableRow } from '@/components/ui/table';
import { Transfer } from '@/types/transfer';

interface BodyProps {
  data: Array<Transfer>;
  menuContent: ReactNode;
}

export const Body = ({ data = [], menuContent }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.sender.name}</TableCell>
          <TableCell>{item.origin_dep.name}</TableCell>
          <TableCell>{item.receiver_dep.name}</TableCell>
          <TableCell>{item.receiver.name}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>{item.status}</TableCell>
          <TableCell>
            <RowDropdownMenu {...{ menuContent }} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
