import { RowDropdownMenu } from '../../../common/row-dropdown-menu';
import { MenuContent } from './MenuContent';

import { TableCell, TableRow } from '@/components/ui/table';
import { User } from '@/types/user';

interface BodyProps {
  data: Array<User>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        const menuContent = <MenuContent {...{ item }} />;
        return (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.department.name}</TableCell>
            <TableCell>{item.role.name}</TableCell>
            <TableCell>
              <RowDropdownMenu {...{ menuContent }} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
