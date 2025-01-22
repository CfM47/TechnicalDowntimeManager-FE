'use client';

import React from 'react';

import useSessionStore from '@/stores/sesionStore';
import { useRouter } from 'next/navigation';

interface PrivateRouteContainerProps {
  children: React.ReactNode;
  authorizedRoles: Array<number>;
}

export const PrivateRouteContainer: React.FC<PrivateRouteContainerProps> = ({
  children,
  authorizedRoles = []
}) => {
  const { token, role } = useSessionStore();
  const router = useRouter();

  if (!token) {
    router.push('/');
    return <></>;
  }

  if (role && authorizedRoles.length && !authorizedRoles.includes(Number(role))) {
    router.push('/');
    return <></>;
  }

  return <>{children}</>;
};
