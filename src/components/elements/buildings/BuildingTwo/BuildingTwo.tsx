import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  SideWalk,
  FrontSideBlock,
  LeftSideBlock
} from './BuildingTwo.styles';

interface BuildingTwoProps {
  className?: string;
}

const BuildingTwo = ({ className = '' }: BuildingTwoProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
    </FrontSideBlock>
  );
  const leftSide = (
    <LeftSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
    </LeftSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={9.5}
        height={16}
        frontBackSideColor="#f2e8de"
        leftRightSideColor="#dbcfc4"
        topBottomSideColor="#d5c6b8"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(30deg) rotateX(-8deg) rotateZ(-4deg)"
      />
      <SideWalk />
    </Wrapper>
  );
};

export default BuildingTwo;
