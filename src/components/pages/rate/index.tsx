import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateRateModal } from '@/components/modals/create-rate-modal';
import { Filters } from '@/components/pages/rate/components/Filters';
import { PaginatedResponse } from '@/services/api/api';
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
  const heads = ['Evaluator', 'Evaluated', 'Date', 'Comment', 'Rate'];
  const title = 'Evaluation';
  const addButton = <CreateRateModal />;
  const { data } = await RateServices.getAll(query);
  const entries = data as PaginatedResponse<Rate>;
  const tableBody = <Body data={entries.items} />;
  const filters = <Filters />;
  const totalItems = entries.total;
  const authorizedRoles = [1, 3];

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRoles} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody, filters, totalItems }} />;
    </PrivateRouteContainer>
  );
};
