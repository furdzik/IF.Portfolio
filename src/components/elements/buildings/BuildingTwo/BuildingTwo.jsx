import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  SideWalk,
  FrontSideBlock,
  LeftSideBlock
} from './BuildingTwo.styles.js';

const BuildingTwo = (props) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
    </FrontSideBlock>
  );
  const leftSide = (
    <LeftSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
    </LeftSideBlock>
  );

  return (
    <Wrapper className={props.className}>
      <StyledBuilding
        width={9.5}
        height={16}
        frontBackSideColor="#f2e8de"
        leftRightSideColor="#dbcfc4"
        topBottomSideColor="#d5c6b8"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(30deg) rotateX(-8deg) rotateZ(-4deg)"
      />
      <SideWalk />
    </Wrapper>
  );
};

BuildingTwo.propTypes = {
  className: PropTypes.string
};

BuildingTwo.defaultProps = {
  className: ''
};

export default BuildingTwo;
