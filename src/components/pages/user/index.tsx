'use client';
import { Body } from './components/Body';
import { Filters } from './components/Filters';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateUserModal } from '@/components/modals/create-user-modal';
import { useFetch } from '@/hooks/useFetch';
import { PaginatedResponse } from '@/services/api/api';
import { UserServices } from '@/services/features/user';
import { User, UserQuery } from '@/types/user';

/**
 * Props for the UserPage component.
 *
 * @interface UserPageProps
 * @property {UserQuery} query - Optional query parameters for the user page.
 */
interface UserPageProps {
  query?: UserQuery;
}

/**
 * UserPage component fetches and displays a list of users.
 *
 * @param {UserPageProps} props - The properties for the UserPage component.
 * @param {object} props.query - The query parameters for fetching users.
 * @returns {JSX.Element} The rendered UserPage component.
 *
 * @example
 * <UserPage query={{ role: 'Administrator' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the user data in a table format.
 */
export const UserPage = ({ query }: UserPageProps): JSX.Element => {
  const heads = ['Name', 'Department', 'Role'];
  const title = 'Users';
  const addButton = <CreateUserModal />;

  const { data, isFetching } = useFetch({
    promise: UserServices.getAll(query),
    defaultData: { items: [], total: 0, page: 1, size: 10 },
    dependencies: query ? [query] : []
  });

  const entries = data as PaginatedResponse<User>;
  const tableBody = <Body data={isFetching ? [] : entries.items} />;
  const filters = <Filters />;
  const totalItems = entries.total;

  return (
    <PrivateRouteContainer redirect>
      <EntityPage {...{ title, heads, addButton, tableBody, filters, totalItems }} />
    </PrivateRouteContainer>
  );
};
