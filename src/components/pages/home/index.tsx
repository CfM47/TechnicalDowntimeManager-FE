import Hero from './components/Hero';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HomePageProps {}

export const HomePage = ({}: HomePageProps) => {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
};
