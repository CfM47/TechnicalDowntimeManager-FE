'use client';

import React from 'react';

import useSessionStore from '@/stores/sesionStore';
import { useRouter } from 'next/navigation';

interface PrivateRouteContainerProps {
  children: React.ReactNode;
  authorizedRoles: Array<number>;
  redirect?: boolean;
}

export const PrivateRouteContainer = ({
  children,
  authorizedRoles = [],
  redirect = false
}: PrivateRouteContainerProps) => {
  const { token, role } = useSessionStore();
  const router = useRouter();

  if (!token) {
    if (redirect) router.push('/');
    return <></>;
  }

  if (role && authorizedRoles.length && !authorizedRoles.includes(Number(role))) {
    if (redirect) router.push('/');
    return <></>;
  }

  return <>{children}</>;
};
