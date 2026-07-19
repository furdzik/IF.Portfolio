import React from 'react';

import {
  Wrapper
} from './CityGround.styles';

interface CityGroundProps {
  className?: string;
}

const CityGround = ({ className = '' }: CityGroundProps) => (
  <Wrapper
    className={className}
  >
    <span />
  </Wrapper>
);

export default CityGround;
