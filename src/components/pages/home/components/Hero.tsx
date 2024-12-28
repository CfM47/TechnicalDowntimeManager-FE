export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="bg-card rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col items-center text-center p-8 md:p-12 lg:p-16">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Gestión eficiente de bajas técnicas
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[600px] mx-auto">
                Simplifica el proceso de gestión de bajas técnicas con nuestra plataforma intuitiva.
                Ahorra tiempo y reduce errores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
