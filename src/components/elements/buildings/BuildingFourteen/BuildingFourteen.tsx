import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingFourteen.styles';

interface BuildingFourteenProps {
  className?: string;
}

const BuildingFourteen = ({ className = '' }: BuildingFourteenProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span />
    </FrontSideBlock>
  );
  const rightSide = (
    <RightSideBlock>
      <span /><span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={12}
        height={25}
        frontBackSideColor="#ffffff"
        leftRightSideColor="#83bacf"
        topBottomSideColor="#94c7e5"
        frontSideBlock={frontSide}
        rightSideBlock={rightSide}
        transform="rotateY(-22deg) rotateX(-15deg) rotateZ(5deg)"
      />
    </Wrapper>
  );
};

export default BuildingFourteen;
