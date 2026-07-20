import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  LeftSideBlock
} from './BuildingNine.styles';

interface BuildingNineProps {
  className?: string;
}

const BuildingNine = ({ className = '' }: BuildingNineProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span />
    </FrontSideBlock>
  );
  const leftSide = (
    <LeftSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span />
    </LeftSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={9}
        height={18}
        frontBackSideColor="#ffffff"
        leftRightSideColor="#e9edef"
        topBottomSideColor="#dbdfe1"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(20deg) rotateX(-9deg) rotateZ(-3deg)"
      />
    </Wrapper>
  );
};

export default BuildingNine;
