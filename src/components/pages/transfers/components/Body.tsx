import { RowDropdownMenu } from '../../../common/row-dropdown-menu';
import { MenuContent } from './MenuContent';

import { TableCell, TableRow } from '@/components/ui/table';
import { Transfer } from '@/types/transfer';

interface BodyProps {
  data: Array<Transfer>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        const menuContent = <MenuContent {...{ item }} />;
        return (
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
        );
      })}
    </>
  );
};
