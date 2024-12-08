import { ReactNode } from 'react';

import { RowDropdownMenu } from '../../components/RowDropdownMenu';
import { Traslado } from '../page';

import { TableCell, TableRow } from '@/components/ui/table';

interface BodyProps {
  data: Array<Traslado>;
  menuContent: ReactNode;
}

export const Body = ({ data, menuContent }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.fecha}</TableCell>
          <TableCell>{item.origen}</TableCell>
          <TableCell>{item.destino}</TableCell>
          <TableCell>
            <RowDropdownMenu {...{ menuContent }} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
