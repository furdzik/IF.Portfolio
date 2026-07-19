import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingSix.styles';

interface BuildingSixProps {
  className?: string;
}

const BuildingSix = ({ className = '' }: BuildingSixProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span /><span /><span /><span /><span /><span />
    </FrontSideBlock>
  );
  const rightSide = (
    <RightSideBlock>
      <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span /><span /><span /><span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={5}
        height={20}
        frontBackSideColor="#ffffff"
        leftRightSideColor="#e9edef"
        topBottomSideColor="#dbdfe1"
        frontSideBlock={frontSide}
        rightSideBlock={rightSide}
        transform="rotateY(-51deg) rotateX(-7deg) rotateZ(9deg)"
      />
    </Wrapper>
  );
};

export default BuildingSix;
