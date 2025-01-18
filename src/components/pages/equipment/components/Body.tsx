import { RowDropdownMenu } from '../../../common/row-dropdown-menu';
import { MenuContent } from './MenuContent';

import { TableCell, TableRow } from '@/components/ui/table';
import { Equipment } from '@/types/equipment';

interface BodyProps {
  data: Array<Equipment>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        const menuContent = <MenuContent item={item} />;
        return (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.state}</TableCell>
            <TableCell>{item.department.name}</TableCell>
            <TableCell>{item.acquisition_date}</TableCell>
            <TableCell>
              <RowDropdownMenu {...{ menuContent }} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
