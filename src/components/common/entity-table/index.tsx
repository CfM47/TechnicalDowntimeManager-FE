import { ReactNode } from 'react';

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface EntityTableProps {
  heads: Array<string>;
  body: ReactNode;
}

export const EntityTable = ({ heads, body }: EntityTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {heads.map((head, index) => (
            <TableHead key={index}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{body}</TableBody>
    </Table>
  );
};
