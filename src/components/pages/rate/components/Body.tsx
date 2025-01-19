import { RowActions } from '@/components/pages/rate/components/RowActions';
import { TableCell, TableRow } from '@/components/ui/table';
import { Rate } from '@/types/rate';

interface BodyProps {
  data: Array<Rate>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.technician.name}</TableCell>
            <TableCell>{item.user.name}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.comment}</TableCell>
            <TableCell>{item.score}</TableCell>
            <TableCell>
              <RowActions item={item} />
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
