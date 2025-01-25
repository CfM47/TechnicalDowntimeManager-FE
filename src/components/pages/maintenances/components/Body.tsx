import { RowActions } from './RowActions';

import { TableCell, TableRow } from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { Maintenance } from '@/types/maitenance';

interface BodyProps {
  data: Array<Maintenance>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.technician.name}</TableCell>
            <TableCell>{item.equipment.name}</TableCell>
            <TableCell>{item.cost}</TableCell>
            <TableCell>{item.type}</TableCell>
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
