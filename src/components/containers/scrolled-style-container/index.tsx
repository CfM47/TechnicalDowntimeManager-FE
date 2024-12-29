'use client';

import { cloneElement, ReactElement } from 'react';

import { useScroll } from '@/hooks/useScroll';

interface ScrolledStyleContainerProps {
  children: ReactElement;
  style?: string;
  scrolledStyle: string;
}

export const ScrolledStyleContainer = ({
  children,
  style = '',
  scrolledStyle
}: ScrolledStyleContainerProps) => {
  const { isScrolled } = useScroll();

  const combinedStyle = `${style} ${isScrolled ? scrolledStyle : ''}`;

  return cloneElement(children, {
    className: `${children.props.className || ''} ${combinedStyle}`
  });
};
