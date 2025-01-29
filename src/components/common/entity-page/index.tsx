import { ReactNode } from 'react';

import { EntityTable } from '../entity-table';

import { PaginationContainer } from '@/components/containers/pagination-container';
import { Card, CardContent } from '@/components/ui/card';

interface EntityPageProps {
  title: string;
  heads: Array<string>;
  tableBody: ReactNode;
  addButton: ReactNode;
  filters?: ReactNode;
  totalItems: number;
}

export const EntityPage = ({
  title,
  heads,
  tableBody,
  addButton,
  filters,
  totalItems
}: EntityPageProps) => {
  return (
    <div className="flex flex-col items-center p-1 pt-10 md:p-10 min-h-screen">
      <Card className="bg-card h-full container mx-auto md:p-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center p-4">
          <h1 className="text-3xl font-bold mb-4 md:mb-0 break-words whitespace-normal">{title}</h1>
          <div className="self-end md:self-auto">{addButton}</div>
        </div>
        <CardContent>
          {filters}
          <PaginationContainer {...{ totalItems }}>
            <EntityTable {...{ heads, body: tableBody }} />
          </PaginationContainer>
        </CardContent>
      </Card>
    </div>
  );
};
