import { RowDropdownMenu } from '../../../common/row-dropdown-menu';
import { MenuContent } from './MenuContent';

import { TableCell, TableRow } from '@/components/ui/table';
import { Downtime } from '@/types/downtime';

interface BodyProps {
  data: Array<Downtime>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        const menuContent = <MenuContent item={item} />;
        return (
          <TableRow key={index}>
            <TableCell>{item.sender.name}</TableCell>
            <TableCell>{item.equipment.name}</TableCell>
            <TableCell>{item.dep_receiver.name}</TableCell>
            <TableCell>{item.receiver.name}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>
              <RowDropdownMenu {...{ menuContent }} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
