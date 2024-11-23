'use client';

import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Traslados', href: '/traslados' },
  { name: 'Bajas', href: '/bajas' },
  { name: 'Mantenimientos', href: '/mantenimientos' }
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-semibold text-gray-500 text-lg">Logo</span>
            </Link>
          </div>
          <div className="hidden md:flex flex-grow justify-end items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-500 font-semibold hover:text-green-500 transition duration-300 ${
                  pathname === item.href ? 'text-green-500 border-b-2 border-green-500' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button>Sign In</Button>
          </div>
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-gray-500 hover:text-green-500 transition duration-300 ${
                        pathname === item.href ? 'text-green-500 font-semibold' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4" onClick={() => setIsOpen(false)}>
                    Sign In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
