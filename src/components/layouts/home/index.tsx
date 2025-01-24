import { ToastProvider } from '@/components/containers/toast-provider';
import { Navbar } from '@/components/layouts/home/components/Navbar';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <ToastProvider>
        <Navbar />
        <div className="bg-cover bg-no-repeat bg-[url('/assets/back_sm.svg')] md:bg-[url('/assets/back.svg')]">
          {children}
        </div>
      </ToastProvider>
    </>
  );
};
