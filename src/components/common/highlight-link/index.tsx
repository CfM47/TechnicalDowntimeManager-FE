'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HighlightLinkProps {
  name: string;
  href: string;
  className?: string;
  activeClassName?: string;
  hoverClassName?: string;
  onClick?: () => void;
}

export const HighlightLink = ({
  name,
  href,
  className = '',
  activeClassName = 'text-green-500 border-b-2 border-green-500',
  hoverClassName = 'hover:text-green-500',
  onClick
}: HighlightLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const combinedStyle = `${className} ${isActive ? activeClassName : ''} ${hoverClassName} transition duration-300`;

  return (
    <Link className={combinedStyle} {...{ href, onClick }}>
      {name}
    </Link>
  );
};
