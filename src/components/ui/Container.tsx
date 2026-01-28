import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: Props) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}
