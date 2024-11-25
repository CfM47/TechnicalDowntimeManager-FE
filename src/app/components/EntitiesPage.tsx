import { EntityTable, TableHeader } from './EntityTable';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Pagination } from '@/components/ui/pagination';

interface EntityListProps<T extends Record<string, any>> {
  title: string;
  headers: TableHeader<T>[];
  data: Array<T>;
}

export const EntitiesPage = <T extends Record<string, any>>({
  title,
  headers,
  data
}: EntityListProps<T>) => {
  return (
    <div className="flex flex-col items-center p-10">
      <Card className="bg-card h-full container mx-auto p-10">
        <div className="flex justify-between items-center mb-6 p-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          <Button>Añadir</Button>
        </div>
        <CardContent>
          <Pagination>
            <EntityTable<T> {...{ headers, data }} />
          </Pagination>
        </CardContent>
      </Card>
    </div>
  );
};
