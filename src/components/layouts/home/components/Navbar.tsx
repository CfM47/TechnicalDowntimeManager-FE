import { HighlightLink } from '@/components/common/highlight-link';
import { SideMenu } from '@/components/common/side-menu';
import { ResponsiveContainer } from '@/components/containers/responsive-container';
import { ScrolledStyleContainer } from '@/components/containers/scrolled-style-container';
import { AuthModal } from '@/components/modals/auth-modal';
import Link from 'next/link';
const navItems = [
  { name: 'Traslados', href: '/transfers' },
  { name: 'Bajas', href: '/downtimes' },
  { name: 'Mantenimientos', href: '/maintenances' },
  { name: 'Valoraciones', href: '/rate' },
  { name: 'Usuarios', href: '/user' }
];

export const Navbar = () => {
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
                  <HighlightLink key={index} {...item} className="text-gray-500 font-semibold" />
                ))}
                <AuthModal />
              </div>
            }
            mobileComponent={<SideMenu items={navItems} />}
          />
        </div>
      </nav>
    </ScrolledStyleContainer>
  );
};
