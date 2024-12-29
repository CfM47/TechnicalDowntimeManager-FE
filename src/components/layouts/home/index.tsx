import { Navbar } from '@/components/layouts/home/components/Navbar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
