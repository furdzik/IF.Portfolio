import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  LeftSideBlock,
  TopSideBlock
} from './BuildingThree.styles';

interface BuildingThreeProps {
  className?: string;
}

const BuildingThree = ({ className = '' }: BuildingThreeProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span />
    </FrontSideBlock>
  );
  const leftSide = (
    <LeftSideBlock>
      <span /><span /><span />
    </LeftSideBlock>
  );

  return (
    <Wrapper className={className}>
      <TopSideBlock
        width={2}
        height={1.5}
        frontBackSideColor="#1ea6f4"
        leftRightSideColor="#2889c1"
        topBottomSideColor="#2889c1"
        transform="rotateY(34deg) rotateX(-4deg) rotateZ(-3deg)"
      />
      <StyledBuilding
        width={7.5}
        height={16.5}
        frontBackSideColor="#edf2ec"
        leftRightSideColor="#fbd195"
        topBottomSideColor="#f7be6e"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(30deg) rotateX(-8deg) rotateZ(-4deg)"
      />
    </Wrapper>
  );
};

export default BuildingThree;
