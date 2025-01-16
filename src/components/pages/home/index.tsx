import Hero from './components/Hero';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
  return (
    <div className="flex flex-col min-h-screen items-center bg-cover bg-no-repeat bg-[url('/assets/back_sm.svg')] md:bg-[url('/assets/back.svg')]">
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
};
