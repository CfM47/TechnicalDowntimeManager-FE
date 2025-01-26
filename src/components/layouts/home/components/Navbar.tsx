'use client';

import { SigninModal } from '../../../modals/sign-in-modal';

import { HighlightLink } from '@/components/common/highlight-link';
import { InitialsAvatar } from '@/components/common/initials-avatar';
import { LogOutButton } from '@/components/common/logout-button';
import { SideMenu } from '@/components/common/side-menu';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { ResponsiveContainer } from '@/components/containers/responsive-container';
import { ScrolledStyleContainer } from '@/components/containers/scrolled-style-container';
import { authorizedRolesByRoute } from '@/lib/constants';
import useSessionStore from '@/stores/sesionStore';
import Link from 'next/link';

const navItems = [
  { name: 'Traslados', href: '/transfers', authorizedRoles: authorizedRolesByRoute.transfers },
  { name: 'Bajas', href: '/downtimes', authorizedRoles: authorizedRolesByRoute.downtimes },
  {
    name: 'Mantenimientos',
    href: '/maintenances',
    authorizedRoles: authorizedRolesByRoute.maintenances
  },
  { name: 'Valoraciones', href: '/rate', authorizedRoles: authorizedRolesByRoute.rate },
  { name: 'Usuarios', href: '/user', authorizedRoles: authorizedRolesByRoute.user },
  { name: 'Equipos', href: '/equipment', authorizedRoles: authorizedRolesByRoute.equipment },
  { name: 'Reportes', href: '/reports', authorizedRoles: authorizedRolesByRoute.reports }
];

export const Navbar = () => {
  const { token, name } = useSessionStore();

  return (
    <ScrolledStyleContainer scrolledStyle="shadow-lg">
      <nav className="sticky top-0 z-50 bg-white transition-shadow duration-300">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" className="font-semibold text-gray-500 text-lg">
            Logo
          </Link>
          <ResponsiveContainer
            desktopComponent={
              <div className="hidden md:flex flex-grow justify-end items-center space-x-8">
                {navItems.map((item, index) => (
                  <PrivateRouteContainer key={index} authorizedRoles={item.authorizedRoles}>
                    <HighlightLink {...item} className="text-gray-500 font-semibold" />
                  </PrivateRouteContainer>
                ))}
                {token ? (
                  <div className="flex items-center space-x-4">
                    <InitialsAvatar name={name ?? ': )'} />
                    <LogOutButton />
                  </div>
                ) : (
                  <SigninModal />
                )}
              </div>
            }
            mobileComponent={<SideMenu items={navItems} />}
          />
        </div>
      </nav>
    </ScrolledStyleContainer>
  );
};
