'use client';
import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

export default function Hero() {
  const texts = [
    'Simplifica tus procesos de trabajo',
    'Ahorra tiempo y reduce errores',
    'Realiza acciones de forma segura, eficiente y sencilla'
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const textVariants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <motion.div
          className="bg-card rounded-3xl shadow-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col items-center text-center p-8 md:p-12 lg:p-16">
            <div className="space-y-4 max-w-3xl">
              {/* AnimatePresence for smooth text transitions */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTextIndex}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary"
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8 }}
                >
                  {texts[currentTextIndex]}
                </motion.h1>
              </AnimatePresence>

              <motion.p
                className="text-muted-foreground md:text-xl max-w-[600px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Bienvenido a TDM, la solución a todos tus problemas
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
