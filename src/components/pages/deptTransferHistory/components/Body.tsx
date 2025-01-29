import { TableCell, TableRow } from '@/components/ui/table';
import { Transfer } from '@/types/transfer';

interface BodyProps {
  data: Array<Transfer>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.sender.name}</TableCell>
            <TableCell>{item.receiver.name}</TableCell>
            <TableCell>{item.origin_dep.name}</TableCell>
            <TableCell>{item.equipment.name}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
