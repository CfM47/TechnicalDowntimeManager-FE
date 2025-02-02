'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

import { SigninModal } from '../../modals/sign-in-modal';
import { HighlightLink } from '../highlight-link';
import { LogOutButton } from '../logout-button';

import { InitialsAvatar } from '@/components/common/initials-avatar';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import useSessionStore from '@/stores/sesionStore';

interface SideMenuProps {
  items: Array<{ name: string; href: string; authorizedRoles: number[] }>;
}

export const SideMenu = ({ items }: SideMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { token, name } = useSessionStore();

  return (
    <div className="flex items-center">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col space-y-4 mt-4">
            {items.map((item, index) => (
              <PrivateRouteContainer key={index} authorizedRoles={item.authorizedRoles}>
                <HighlightLink
                  {...item}
                  className="text-gray-500 font-semibold"
                  onClick={() => setIsOpen(false)}
                />
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
        </SheetContent>
      </Sheet>
    </div>
  );
};
