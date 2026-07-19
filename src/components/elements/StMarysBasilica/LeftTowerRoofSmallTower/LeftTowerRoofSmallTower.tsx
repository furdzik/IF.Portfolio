import React from 'react';

import {
  Wrapper,
  BaseWall,
  Roof
} from './LeftTowerRoofSmallTower.styles';

export interface LeftTowerRoofSmallTowerProps {
  className?: string;
  scalex?: boolean;
  skew?: boolean;
}

const LeftTowerRoofSmallTower = ({ className = '', scalex = false, skew = false }: LeftTowerRoofSmallTowerProps) => (
  <Wrapper className={className} scalex={scalex}>
    <BaseWall skew={skew} />
    <Roof skew={skew} scalex={scalex}>
      <span /><span /><span /><span />
    </Roof>
  </Wrapper>
);

export default LeftTowerRoofSmallTower;
