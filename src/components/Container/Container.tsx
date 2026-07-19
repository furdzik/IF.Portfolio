import React from 'react';

import { Wrapper } from './Container.styles';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
);

export default Container;
