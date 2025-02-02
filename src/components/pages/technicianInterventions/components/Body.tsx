import { TableCell, TableRow } from '@/components/ui/table';
import { formatDate } from '@/lib/utils';
import { TechnicianInterventionType } from '@/types/technician';

interface BodyProps {
  data: Array<TechnicianInterventionType>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{formatDate(item.date)}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.aditional_info}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
