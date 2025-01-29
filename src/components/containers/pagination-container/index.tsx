'use client';
import React, { ReactNode } from 'react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { useFilters } from '@/hooks/useFilters';
import { PaginationQuery } from '@/services/routes/types';

/**
 * Props for the PaginationContainer component.
 *
 * @interface PaginationContainerProps
 * @property {ReactNode} children - The child elements to be rendered within the pagination container.
 * @property {number} totalItems - The total of items of the data
 */
interface PaginationContainerProps {
  children: ReactNode;
  totalItems: number;
}

/**
 * PaginationContainer component provides pagination functionality for its children components.
 * It uses the `useFilters` hook to manage pagination state and updates the current page.
 *
 * @param {PaginationContainerProps} props - The props for the PaginationContainer component.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the PaginationContainer.
 *
 * @returns {JSX.Element} The rendered PaginationContainer component.
 *
 * @example
 * <PaginationContainer>
 *   <YourComponent />
 * </PaginationContainer>
 */
export function PaginationContainer({ children, totalItems }: PaginationContainerProps) {
  const { hotUpdateFilterValue, query } = useFilters<PaginationQuery>({
    initialValue: { page: 1, size: 10 }
  });

  console.log(totalItems);

  const currentPage = query.page;
  const totalPages = totalItems / query.size + 1;

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    if (page > totalPages) return;
    hotUpdateFilterValue('page', page);
  };

  return (
    <div>
      {children}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="rounded-full p-2.5"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {currentPage}
          <PaginationItem>
            <PaginationNext
              className="rounded-full p-2.5"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
