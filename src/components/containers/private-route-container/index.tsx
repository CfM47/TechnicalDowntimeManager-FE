'use client';

import React from 'react';

import { Role } from '@/lib/enums';
import useSessionStore from '@/stores/sesionStore';
import { redirect as redirectFunc } from 'next/navigation';

interface PrivateRouteContainerProps {
  children: React.ReactNode;
  authorizedRoles: Array<Role>;
  redirect?: boolean;
}

export const PrivateRouteContainer = ({
  children,
  authorizedRoles = [],
  redirect = false
}: PrivateRouteContainerProps) => {
  const { token, role } = useSessionStore();

  if (!token) {
    if (redirect) redirectFunc('/');
    return <></>;
  }

  if (role && authorizedRoles.length && !authorizedRoles.includes(role as Role)) {
    if (redirect) redirectFunc('/');
    return <></>;
  }

  return <>{children}</>;
};
