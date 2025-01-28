import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateDowntimeModal } from '@/components/modals/create-downtime-modal';
import { authorizedRolesByRoute } from '@/lib/constants';
import { DowntimeServices } from '@/services/features/downtime';
import { Downtime, DowntimeQuery } from '@/types/downtime';

/**
 * Props for the DowntimesPage component.
 *
 * @interface DowntimesPageProps
 * @property {DowntimeQuery} query - Optional query parameters for the downtimes page.
 */
interface DowntimesPageProps {
  query?: DowntimeQuery;
}

/**
 * DowntimesPage component fetches and displays a list of downtimes.
 *
 * @param {DowntimesPageProps} props - The properties for the DowntimesPage component.
 * @param {object} props.query - The query parameters for fetching downtimes.
 * @returns {Promise<JSX.Element>} The rendered DowntimesPage component.
 *
 * @example
 * <DowntimesPage query={{ status: 'active' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the downtime data in a table format.
 */
export const DowntimesPage = async ({ query }: DowntimesPageProps): Promise<JSX.Element> => {
  const heads = ['Sender', 'Equipment', 'Destiny', 'Receiver', 'Date'];
  const title = 'Downtime';
  const addButton = <CreateDowntimeModal />;
  const { data } = await DowntimeServices.getAll(query);
  const entries = data as Downtime[];
  const tableBody = <Body data={entries} />;

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRolesByRoute.downtimes} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody }} />;
    </PrivateRouteContainer>
  );
};
