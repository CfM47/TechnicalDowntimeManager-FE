import { TableCell, TableRow } from '@/components/ui/table';
import { TechnicianPerformanceType } from '@/types/technician';
interface BodyProps {
  data: Array<TechnicianPerformanceType>;
}

export const Body = ({ data = [] }: BodyProps) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.total_maintenances}</TableCell>
            <TableCell>{item.total_rates}</TableCell>
            <TableCell>{item.score_avg}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
