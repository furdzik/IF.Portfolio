import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  BricklayWrapper,
  BrickWrapper,
  Brick
} from './Bricklay.styles';

export interface BricklayProps {
  className?: string;
  flip?: boolean;
  long?: number;
  noShadow?: boolean;
}

const Bricklay = ({ className = '', flip = false, long = 10, noShadow = false }: BricklayProps) => (
  <BricklayWrapper
    className={className}
    long={long}
    flip={flip}
    noShadow={noShadow}
  >
    <BrickWrapper noShadow={noShadow}>
      {
        Array.from({ length: long }).map(() => (
          <Brick key={uuidv4()} noShadow={noShadow} />
        ))
      }
    </BrickWrapper>
  </BricklayWrapper>
);

export default Bricklay;
