'use client';

import { LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

import { SigninModal } from '../../modals/sign-in-modal';
import { HighlightLink } from '../highlight-link';

import { InitialsAvatar } from '@/components/common/initials-avatar';
import { PrivateRouteContainer } from '@/components/containers/private-route-container';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import useSessionStore from '@/stores/sesionStore';
import { useRouter } from 'next/navigation';

interface SideMenuProps {
  items: Array<{ name: string; href: string; authorizedRoles: number[] }>;
}

export const SideMenu = ({ items }: SideMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { clear, token, name } = useSessionStore();
  const router = useRouter();

  const handleLogout = () => {
    clear();
    router.push('/');
  };

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
                <Button
                  onClick={handleLogout}
                  className=" bg-white text--black border-transparent rounded-full hover:text-red-600 hover:bg-white transition-colors"
                >
                  <LogOut />
                </Button>
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
