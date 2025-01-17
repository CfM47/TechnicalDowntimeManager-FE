import { ReactNode } from 'react';

import { RowDropdownMenu } from '../../../common/row-dropdown-menu';

import { TableCell, TableRow } from '@/components/ui/table';
import { Rate } from '@/types/rate';

interface BodyProps {
  data: Array<Rate>;
  menuContent: ReactNode;
}

export const Body = ({ data = [], menuContent }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.id_technician}</TableCell>
          <TableCell>{item.id_user}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>{item.comment}</TableCell>
          <TableCell>{item.score}</TableCell>
          <TableCell>
            <RowDropdownMenu {...{ menuContent }} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
