import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
};

export function Button({ children, href, variant = 'primary', className = '', ...rest }: Props) {
  return (
    <a href={href} className={`btn btn-${variant} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
