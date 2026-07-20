import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  LeftSideBlock
} from './BuildingFour.styles';

interface BuildingFourProps {
  className?: string;
}

const BuildingFour = ({ className = '' }: BuildingFourProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span />
    </FrontSideBlock>
  );
  const leftSide = (
    <LeftSideBlock>
      <span /><span /><span /><span />
    </LeftSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={8.5}
        height={19.5}
        frontBackSideColor="#edf2ec"
        leftRightSideColor="#57b4e9"
        topBottomSideColor="#49a3d7"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(30deg) rotateX(-8deg) rotateZ(-4deg)"
      />
    </Wrapper>
  );
};

export default BuildingFour;
