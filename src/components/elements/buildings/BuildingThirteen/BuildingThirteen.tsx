import React from 'react';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingThirteen.styles';

interface BuildingThirteenProps {
  className?: string;
}

const BuildingThirteen = ({ className = '' }: BuildingThirteenProps) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
    </FrontSideBlock>
  );
  const rightSide = (
    <RightSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={className}>
      <StyledBuilding
        width={9}
        height={24}
        frontBackSideColor="#cee7fd"
        leftRightSideColor="#c1d8ed"
        topBottomSideColor="#b5d5f1"
        frontSideBlock={frontSide}
        rightSideBlock={rightSide}
        transform="rotateY(-22deg) rotateX(-15deg) rotateZ(5deg)"
      />
    </Wrapper>
  );
};

export default BuildingThirteen;
