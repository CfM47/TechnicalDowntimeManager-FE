'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

import { SigninModal } from '../../modals/sign-in-modal';
import { HighlightLink } from '../highlight-link';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface SideMenuProps {
  items: Array<{ name: string; href: string }>;
}

export const SideMenu = ({ items }: SideMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
              <HighlightLink
                key={index}
                {...item}
                className="text-gray-500 font-semibold"
                onClick={() => setIsOpen(false)}
              />
            ))}
            <SigninModal />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
