import { RowActions } from './RowActions';

import { TableCell, TableRow } from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { Equipment } from '@/types/equipment';

interface BodyProps {
  data: Array<Equipment>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.department.name}</TableCell>
            <TableCell>{formatDate(item.acquisition_date)}</TableCell>
            <TableCell>
              <RowActions {...{ item }} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
