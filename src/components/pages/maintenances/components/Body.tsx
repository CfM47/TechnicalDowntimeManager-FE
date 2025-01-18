import { RowDropdownMenu } from '../../../common/row-dropdown-menu';
import { MenuContent } from './MenuContent';

import { TableCell, TableRow } from '@/components/ui/table';
import { Maintenance } from '@/types/maitenance';

interface BodyProps {
  data: Array<Maintenance>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        const menuContent = <MenuContent item={item} />;

        return (
          <TableRow key={index}>
            <TableCell>{item.technician.name}</TableCell>
            <TableCell>{item.equipment.name}</TableCell>
            <TableCell>{item.cost}</TableCell>
            <TableCell>{item.type}</TableCell>
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
