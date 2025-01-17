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
          <TableCell>{item.id_sender}</TableCell>
          <TableCell>{item.id_origin_dep}</TableCell>
          <TableCell>{item.id_receiver_dep}</TableCell>
          <TableCell>{item.id_receiver}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>{item.downtime_status}</TableCell>
          <TableCell>
            <RowDropdownMenu {...{ menuContent }} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
