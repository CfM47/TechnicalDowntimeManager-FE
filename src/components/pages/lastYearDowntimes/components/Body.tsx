import { TableCell, TableRow } from '@/components/ui/table';
import { Downtime } from '@/types/downtime';
interface BodyProps {
  data: Array<Downtime>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.equipment.name}</TableCell>
            <TableCell>{item.sender.name}</TableCell>
            <TableCell>{item.dep_receiver.name}</TableCell>
            <TableCell>{item.receiver.name}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
