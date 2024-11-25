'use client';

import { RowDropdownMenu } from './RowDropdownMenu';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

export type TableHeader<T extends Record<string, any>> = {
  key: keyof T;
  label: string;
};

interface EntityTableProps<T extends Record<string, any>> {
  headers: TableHeader<T>[];
  data: Array<T>;
}

export const EntityTable = <T extends Record<string, any>>({
  data,
  headers
}: EntityTableProps<T>) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead key={index}>{header.label}</TableHead>
          ))}
          <TableHead>Acciones </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            {headers.map((header, index) => (
              <TableCell key={index}>{item[header.key]}</TableCell>
            ))}
            <TableCell>
              <RowDropdownMenu
                options={[
                  { label: 'Editar', action: () => Promise.resolve() },
                  { label: 'Eliminar', action: () => Promise.resolve() },
                  { label: 'Detalles', action: () => Promise.resolve() }
                ]}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
