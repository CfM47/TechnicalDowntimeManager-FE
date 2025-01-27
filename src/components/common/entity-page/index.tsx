import { ReactNode } from 'react';

import { EntityTable } from '../entity-table';

import { Card, CardContent } from '@/components/ui/card';

interface EntityPageProps {
  title: string;
  heads: Array<string>;
  tableBody: ReactNode;
  addButton: ReactNode;
}

export const EntityPage = ({ title, heads, tableBody, addButton }: EntityPageProps) => {
  return (
    <div className="flex flex-col items-center p-1 pt-10 md:p-10 min-h-screen">
      <Card className="bg-transparent h-full container mx-auto md:p-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center p-4">
          <h1 className="text-3xl font-bold mb-4 md:mb-0 break-words whitespace-normal">{title}</h1>
          <div className="self-end md:self-auto">{addButton}</div>
        </div>
        <CardContent>
          <EntityTable {...{ heads, body: tableBody }} />
        </CardContent>
      </Card>
    </div>
  );
};
