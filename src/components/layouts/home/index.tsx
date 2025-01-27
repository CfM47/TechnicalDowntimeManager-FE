'use client';
import { useEffect } from 'react';

import { ToastProvider } from '@/components/containers/toast-provider';
import { Navbar } from '@/components/layouts/home/components/Navbar';
import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface HomeLayoutProps {
  children: React.ReactNode;
}
const COLORS_TOP = ['#006c48', '#12399b', '#233767', '#026c13'];
export const HomeLayout = ({ children }: HomeLayoutProps) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror'
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, white 50%, ${color})`;
  return (
    <>
      <motion.section
        style={{
          backgroundImage
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <ToastProvider>
          <Navbar />

          {children}
        </ToastProvider>
      </motion.section>
    </>
  );
};
