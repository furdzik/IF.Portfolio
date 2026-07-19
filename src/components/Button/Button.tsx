import React from 'react';

import { ButtonWrapper } from './Button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

const Button = ({ children, className = '', href = '', target = '' }: ButtonProps) => (
  <ButtonWrapper
    className={className}
    href={href}
    target={target}
  >
    {children}
  </ButtonWrapper>
);

export default Button;
