import { Body } from './components/Body';
import { Filters } from './components/Filters';

import { EntityPage } from '@/components/common/entity-page';
import { ExportButton } from '@/components/common/export-button';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { Role } from '@/lib/enums';
import { PaginatedResponse } from '@/services/api/api';
import { TechnicianServices } from '@/services/features/technician';
import { routes } from '@/services/routes/routes';
import { TechnicianInterventionType, TechnicianQuery } from '@/types/technician';

interface TechnicianInterventionsPage {
  query?: Pick<TechnicianQuery, 'id_user' | 'page' | 'size'>;
}

export const TechnicianInterventionsPage = async ({
  query
}: TechnicianInterventionsPage): Promise<JSX.Element> => {
  const heads = ['Date', 'Type', 'Aditional Information'];
  const title = 'Technician Interventions';
  const { data } = query?.id_user
    ? await TechnicianServices.Interventions(query.id_user, { page: query.page, size: query.size })
    : { data: { items: [], page: 1, size: 10, total: 0 } };
  const entries = data as PaginatedResponse<TechnicianInterventionType>;
  const addButton = query?.id_user ? (
    <ExportButton
      query={{ page: 1, size: 1000000 }}
      params={{ id: query.id_user }}
      route={routes.technician.interventionsReport}
    />
  ) : null;
  const tableBody = <Body data={entries.items} />;
  const totalItems = entries.total;
  const filters = <Filters />;

  return (
    <PrivateRouteContainer authorizedRoles={[Role.admin]} redirect>
      <EntityPage {...{ title, heads, tableBody, totalItems, filters, addButton }} />;
    </PrivateRouteContainer>
  );
};
