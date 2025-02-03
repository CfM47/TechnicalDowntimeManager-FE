'use client';

import React, { useEffect } from 'react';

import { AuthServices } from '@/services/features/auth';
import useSessionStore from '@/stores/sesionStore';
import { redirect as redirectFunc } from 'next/navigation';

interface PrivateRouteContainerProps {
  children: React.ReactNode;
  authorizedRoles: Array<number>;
  redirect?: boolean;
}

export const PrivateRouteContainer = ({
  children,
  redirect = false
}: PrivateRouteContainerProps) => {
  const { token } = useSessionStore();
  const [isAuthorized, setIsAuthorized] = React.useState<boolean>(false);

  useEffect(() => {
    AuthServices.authorize()
      .then(({ status }) => {
        if (status === 200) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          if (redirect) {
            redirectFunc('/');
          }
        }
      })
      .catch(() => {
        setIsAuthorized(false);
        if (redirect) {
          redirectFunc('/');
        }
      });
  }, [redirect, token]);

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
};
