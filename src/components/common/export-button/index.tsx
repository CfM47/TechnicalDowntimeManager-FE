'use client';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';

import { Button } from '@/components/ui/button';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { useFetchOptions } from '@/hooks/useFetchOptions';
import { QueryParams, Route, UrlParams } from '@/services/routes/types';
import { buildUrlWithQuery } from '@/services/routes/utils';

interface ExportButtonProps {
  query?: QueryParams;
  params?: UrlParams;
  route: Route;
}

export const ExportButton = ({ query, params, route }: ExportButtonProps) => {
  const { formats } = useFetchOptions({ selectFrom: ['FORMAT'] });

  const handleClick = async (format: string) => {
    try {
      const exportQuery = { ...query, format };
      const url = buildUrlWithQuery({ route, urlParams: params, queryParams: exportQuery });
      const response = await fetch(url, {
        method: 'GET'
      });
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', `export.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading the file', error);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">Exportar</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {formats.map((format, index) => (
          <DropdownMenuItem
            className="bg-white border rounded-sm border-black w-20 text-center"
            onClick={() => handleClick(format)}
            key={index}
          >
            {format}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
