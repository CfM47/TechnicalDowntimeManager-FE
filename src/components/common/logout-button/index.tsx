'use client';
import { LogOut } from 'lucide-react';

import { Button } from '@/components/ui/button';
import useSessionStore from '@/stores/sesionStore';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LogOutButtonProps {}

export const LogOutButton = ({}: LogOutButtonProps) => {
  const { clear } = useSessionStore();

  return (
    <Button
      onClick={clear}
      className=" bg-white text--black border-transparent rounded-full hover:text-red-600 hover:bg-white transition-colors"
      size="icon"
    >
      <LogOut />
    </Button>
  );
};
