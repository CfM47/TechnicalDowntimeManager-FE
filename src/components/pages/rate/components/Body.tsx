import { RowDropdownMenu } from '../../../common/row-dropdown-menu';
import { MenuContent } from './MenuContent';

import { TableCell, TableRow } from '@/components/ui/table';
import { Rate } from '@/types/rate';

interface BodyProps {
  data: Array<Rate>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        const menuContent = <MenuContent item={item} />;
        return (
          <TableRow key={index}>
            <TableCell>{item.technician.name}</TableCell>
            <TableCell>{item.user.name}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.comment}</TableCell>
            <TableCell>{item.score}</TableCell>
            <TableCell>
              <RowDropdownMenu {...{ menuContent }} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
