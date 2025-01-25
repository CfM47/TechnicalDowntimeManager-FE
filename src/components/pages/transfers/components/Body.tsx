import { RowActions } from './RowActions';

import { TableCell, TableRow } from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { Transfer } from '@/types/transfer';

interface BodyProps {
  data: Array<Transfer>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.sender.name}</TableCell>
            <TableCell>{item.origin_dep.name}</TableCell>
            <TableCell>{item.receiver_dep.name}</TableCell>
            <TableCell>{item.receiver.name}</TableCell>
            <TableCell>{formatDate(item.date)}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>
              <RowActions item={item} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
