'use client';
import { Body } from './components/Body';
import { Filters } from './components/Filters';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { useFetch } from '@/hooks/useFetch';
import { PaginatedResponse } from '@/services/api/api';
import { TechnicianServices } from '@/services/features/technician';
import { TechnicianInterventionType, TechnicianQuery } from '@/types/technician';

interface TechnicianInterventionsPage {
  query?: Pick<TechnicianQuery, 'id_user' | 'page' | 'size'>;
}

export const TechnicianInterventionsPage = ({
  query
}: TechnicianInterventionsPage): JSX.Element => {
  const heads = ['Date', 'Type', 'Aditional Information'];
  const title = 'Technician Interventions';

  const { data, isFetching } = useFetch({
    promise: query?.id_user
      ? TechnicianServices.Interventions(query.id_user, { page: query.page, size: query.size })
      : Promise.resolve({
          data: { items: [], page: 1, size: 10, total: 0 },
          status: 200,
          statusText: 'OK'
        }),
    defaultData: { items: [], total: 0, page: 1, size: 10 },
    dependencies: query ? [query] : []
  });

  const entries = data as PaginatedResponse<TechnicianInterventionType>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const totalItems = entries.total;
  const filters = <Filters />;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems, filters }} />
    </PrivateRouteContainer>
  );
};
