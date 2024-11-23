import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
}
