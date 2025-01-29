import { TableCell, TableRow } from '@/components/ui/table';
import { EquipmentMaintenancesCount } from '@/types/equipment';

interface BodyProps {
  data: Array<EquipmentMaintenancesCount>;
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
            <TableCell>{item.totalMaintenances}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
