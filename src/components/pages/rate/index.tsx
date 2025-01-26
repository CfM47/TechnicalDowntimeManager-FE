import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateRateModal } from '@/components/modals/create-rate-modal';
import { authorizedRolesByRoute } from '@/lib/constants';
import { RateServices } from '@/services/features/rate';
import { Rate } from '@/types/rate';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RatePageProps {}

export const RatePage = async ({}: RatePageProps) => {
  const heads = ['Valorador', 'Valorado', 'Fecha', 'Comentario', 'Puntuación'];
  const title = 'Valoraciones';
  const addButton = <CreateRateModal />;
  const { data } = await RateServices.getAll();
  const entries = data as Rate[];

  const tableBody = <Body data={entries} />;

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRolesByRoute.rate} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody }} />;
    </PrivateRouteContainer>
  );
};
