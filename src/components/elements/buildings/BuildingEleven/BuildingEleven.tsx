import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingEleven.styles';

interface BuildingElevenProps {
  className?: string;
}

const BuildingEleven = ({ className = '' }: BuildingElevenProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span />
    </FrontSideBlock>
  );
  const rightSide = (
    <RightSideBlock>
      <span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={9}
        height={16}
        frontBackSideColor="#edf2ec"
        leftRightSideColor="#f5dab5"
        topBottomSideColor="#ffcb83"
        frontSideBlock={frontSide}
        rightSideBlock={rightSide}
        transform="rotateY(-22deg) rotateX(-15deg) rotateZ(5deg)"
      />
    </Wrapper>
  );
};

export default BuildingEleven;
