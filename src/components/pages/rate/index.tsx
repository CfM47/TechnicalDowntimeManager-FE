import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateRateModal } from '@/components/modals/create-rate-modal';
import { authorizedRolesByRoute } from '@/lib/constants';
import { RateServices } from '@/services/features/rate';
import { Rate, RateQuery } from '@/types/rate';

/**
 * Props for the RatePage component.
 *
 * @interface RatePageProps
 * @property {RateQuery} query - Optional query parameters for the rate page.
 */
interface RatePageProps {
  query?: RateQuery;
}

/**
 * RatePage component fetches and displays a list of rates.
 *
 * @param {RatePageProps} props - The properties for the RatePage component.
 * @param {object} props.query - The query parameters for fetching rates.
 * @returns {Promise<JSX.Element>} The rendered RatePage component.
 *
 * @example
 * <RatePage query={{ evaluator: 'John Doe' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the rate data in a table format.
 */
export const RatePage = async ({ query }: RatePageProps): Promise<JSX.Element> => {
  const heads = ['Valorador', 'Valorado', 'Fecha', 'Comentario', 'Puntuación'];
  const title = 'Valoraciones';
  const addButton = <CreateRateModal />;
  const { data } = await RateServices.getAll(query);
  const entries = data as Rate[];

  const tableBody = <Body data={entries} />;

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRolesByRoute.rate} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody }} />;
    </PrivateRouteContainer>
  );
};
