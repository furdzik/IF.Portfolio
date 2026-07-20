import React from 'react';

import {
  Wrapper,
  BirdWrapper
} from './Bird.styles';

export interface BirdProps {
  className?: string;
  color?: string;
}

const Bird = ({ className = '', color }: BirdProps) => (
  <Wrapper className={className}>
    <BirdWrapper color={color}>
      <span />
    </BirdWrapper>
  </Wrapper>
);

export default Bird;
