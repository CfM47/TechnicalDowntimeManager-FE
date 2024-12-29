'use client';

import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

import { SCREEN_SIZES } from '@/lib/constants';

interface ResponsiveContainerProps {
  mobileComponent: ReactNode;
  desktopComponent: ReactNode;
}

export const ResponsiveContainer = ({
  mobileComponent,
  desktopComponent
}: ResponsiveContainerProps) => {
  const isDesktop = useMediaQuery({ minWidth: SCREEN_SIZES.md });

  return <>{isDesktop ? desktopComponent : mobileComponent}</>;
};
