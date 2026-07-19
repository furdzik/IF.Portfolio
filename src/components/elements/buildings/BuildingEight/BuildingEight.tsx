import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingEight.styles';

interface BuildingEightProps {
  className?: string;
}

const BuildingEight = ({ className = '' }: BuildingEightProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span /><span /><span /><span /><span /><span />
    </FrontSideBlock>
  );
  const leftSide = (
    <RightSideBlock>
      <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span /><span /><span /><span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={5}
        height={18}
        frontBackSideColor="#ededed"
        leftRightSideColor="#d5d8d9"
        topBottomSideColor="#dbdfe1"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(20deg) rotateX(-9deg) rotateZ(-3deg)"
      />
    </Wrapper>
  );
};

export default BuildingEight;
