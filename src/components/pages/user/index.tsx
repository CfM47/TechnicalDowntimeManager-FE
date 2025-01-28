import { Body } from './components/Body';

import { EntityPage } from '@/components/common/entity-page';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { CreateUserModal } from '@/components/modals/create-user-modal';
import { authorizedRolesByRoute } from '@/lib/constants';
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
 * @returns {Promise<JSX.Element>} The rendered UserPage component.
 *
 * @example
 * <UserPage query={{ role: 'Administrator' }} />
 *
 * @remarks
 * This component is wrapped in a PrivateRouteContainer to ensure that only authorized users can access it.
 * It uses the EntityPage component to display the user data in a table format.
 */
export const UserPage = async ({ query }: UserPageProps): Promise<JSX.Element> => {
  const heads = ['Nombre', 'Departamento', 'Rol'];
  const title = 'Usuarios';
  const addButton = <CreateUserModal />;
  const { data } = await UserServices.getAll(query);
  const entries = data as User[];
  const tableBody = <Body data={entries} />;

  return (
    <PrivateRouteContainer authorizedRoles={authorizedRolesByRoute.user} redirect>
      <EntityPage {...{ title, heads, addButton, tableBody }} />;
    </PrivateRouteContainer>
  );
};
