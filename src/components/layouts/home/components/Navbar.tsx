'use client';

import { SigninModal } from '../../../modals/sign-in-modal';

import { HighlightLink } from '@/components/common/highlight-link';
import { InitialsAvatar } from '@/components/common/initials-avatar';
import { LogOutButton } from '@/components/common/logout-button';
import { SideMenu } from '@/components/common/side-menu';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { ResponsiveContainer } from '@/components/containers/responsive-container';
import { ScrolledStyleContainer } from '@/components/containers/scrolled-style-container';
import useSessionStore from '@/stores/sesionStore';
import Link from 'next/link';

const navItems = [
  { name: 'Transfers', href: '/transfers' },
  { name: 'Downtimes', href: '/downtimes' },
  { name: 'Maintenances', href: '/maintenances' },
  { name: 'Ratings', href: '/rate' },
  { name: 'Users', href: '/user' },
  { name: 'Equipment', href: '/equipment' },
  { name: 'Reports', href: '/reports' }
];

export const Navbar = () => {
  const { name, token } = useSessionStore();

  return (
    <ScrolledStyleContainer scrolledStyle="shadow-lg">
      <nav className="sticky top-0 z-50 bg-white transition-shadow duration-300">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <Link href="/" className="font-semibold text-gray-500 text-lg">
            TDM
          </Link>
          <ResponsiveContainer
            desktopComponent={
              <div className="hidden md:flex flex-grow justify-end items-center space-x-8">
                {navItems.map((item, index) => (
                  <PrivateRouteContainer key={index}>
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
