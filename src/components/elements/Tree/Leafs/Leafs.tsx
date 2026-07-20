import React from 'react';

import {
  Wrapper,
  LeafOne,
  LeafTwo,
  LeafThree,
  LeafFour
} from './Leafs.styles';

interface LeafsProps {
  className?: string;
  color?: 'pink' | 'green';
  variant?: 'one' | 'two' | 'three';
}

const Leafs = ({ className = '', color = 'pink', variant = 'one' }: LeafsProps) => (
  <Wrapper className={className}>
    <LeafOne color={color} variant={variant} />
    <LeafTwo color={color} variant={variant} />
    <LeafThree color={color} variant={variant} />
    <LeafFour color={color} variant={variant} />
  </Wrapper>
);

export default Leafs;
