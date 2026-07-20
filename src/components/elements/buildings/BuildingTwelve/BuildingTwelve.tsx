import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingTwelve.styles';

interface BuildingTwelveProps {
  className?: string;
}

const BuildingTwelve = ({ className = '' }: BuildingTwelveProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span />
    </FrontSideBlock>
  );
  const rightSide = (
    <RightSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={8}
        height={17}
        frontBackSideColor="#ffffff"
        leftRightSideColor="#e9edef"
        topBottomSideColor="#dbdfe1"
        frontSideBlock={frontSide}
        rightSideBlock={rightSide}
        transform="rotateY(-22deg) rotateX(-15deg) rotateZ(5deg)"
      />
    </Wrapper>
  );
};

export default BuildingTwelve;
