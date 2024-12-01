'use client';
import { useEffect, useState } from 'react';

import { EntityTable, TableHeader } from './EntityTable';
import { PaginationContainer } from './PaginationContainer';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
  const fetchData = async (page: number, itemsPerPage: number): Promise<T[]> => {
    return new Promise((resolve) => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      resolve(data.slice(start, end));
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const itemsPerPage = 10;

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(currentPage, itemsPerPage);
      setPaginatedData(result);
    };
    getData();
  }, [currentPage]);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center p-10">
      <Card className="bg-card h-full container mx-auto p-10">
        <div className="flex justify-between items-center mb-6 p-3">
          <h1 className="text-3xl font-bold">{title}</h1>
          <Button>Añadir</Button>
        </div>
        <CardContent>
          <PaginationContainer
            totalItems={data.length}
            onChangePage={onChangePage}
            itemsPerPage={10}
          >
            <EntityTable<T> {...{ headers, data: paginatedData }} />
          </PaginationContainer>
        </CardContent>
      </Card>
    </div>
  );
};
