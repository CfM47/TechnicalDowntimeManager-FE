import { RowActions } from './RowActions';

import { TableCell, TableRow } from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { Downtime } from '@/types/downtime';
interface BodyProps {
  data: Array<Downtime>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.sender.name}</TableCell>
            <TableCell>{item.equipment.name}</TableCell>
            <TableCell>{item.dep_receiver.name}</TableCell>
            <TableCell>{item.receiver.name}</TableCell>
            <TableCell>{formatDate(item.date)}</TableCell>
            <TableCell>
              <RowActions item={item} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
