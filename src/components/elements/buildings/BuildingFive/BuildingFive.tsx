import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  LeftSideBlock
} from './BuildingFive.styles';

interface BuildingFiveProps {
  className?: string;
}

const BuildingFive = ({ className = '' }: BuildingFiveProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
    </FrontSideBlock>
  );
  const leftSide = (
    <LeftSideBlock>
      <span /><span /><span /><span /><span /><span />
    </LeftSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={7.5}
        height={22.5}
        frontBackSideColor="#edf2ec"
        leftRightSideColor="#aed7ef"
        topBottomSideColor="#86c0e1"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(20deg) rotateX(-9deg) rotateZ(-3deg)"
      />
    </Wrapper>
  );
};

export default BuildingFive;
