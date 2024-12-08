import { ReactNode } from 'react';

import { EntityTable } from './EntityTable';

import { Card, CardContent } from '@/components/ui/card';

interface EntityPageProps {
  title: string;
  heads: Array<string>;
  tableBody: ReactNode;
  addButton: ReactNode;
}

export const EntitiesPage = ({ title, heads, tableBody, addButton }: EntityPageProps) => {
  return (
    <div className="flex flex-col items-center p-10">
      <Card className="bg-card h-full container mx-auto p-10">
        <div className="flex justify-between items-center mb-6 p-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          {addButton}
        </div>
        <CardContent>
          <EntityTable {...{ heads, body: tableBody }} />
        </CardContent>
      </Card>
    </div>
  );
};
