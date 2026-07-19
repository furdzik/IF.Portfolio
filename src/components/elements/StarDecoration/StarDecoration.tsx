import React from 'react';

import {
  Wrapper,
  StarWrapper
} from './StarDecoration.styles';

export interface StarDecorationProps {
  className?: string;
  color?: string;
  size?: number;
}

const StarDecoration = ({ className = '', color = '#ff0000', size = 15 }: StarDecorationProps) => (
  <Wrapper className={className} size={size}>
    <StarWrapper size={size} color={color}>
      <span />
      <span />
      <span />
      <span />
    </StarWrapper>
  </Wrapper>
);

export default StarDecoration;
