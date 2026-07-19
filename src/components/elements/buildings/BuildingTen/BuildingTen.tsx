import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingTen.styles';

interface BuildingTenProps {
  className?: string;
}

const BuildingTen = ({ className = '' }: BuildingTenProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span />
    </FrontSideBlock>
  );
  const rightSide = (
    <RightSideBlock>
      <span /><span /><span /><span /><span /><span />
      <span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={7.5}
        height={22.5}
        frontBackSideColor="#e1efde"
        leftRightSideColor="#83bacf"
        topBottomSideColor="#b8c7c5"
        frontSideBlock={frontSide}
        rightSideBlock={rightSide}
        transform="rotateY(-22deg) rotateX(-15deg) rotateZ(5deg)"
      />
    </Wrapper>
  );
};

export default BuildingTen;
