import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  LeftSideBlock
} from './BuildingFour.styles.js';

const BuildingFour = (props) => {
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
    <Wrapper className={props.className}>
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

BuildingFour.propTypes = {
  className: PropTypes.string
};

BuildingFour.defaultProps = {
  className: ''
};

export default BuildingFour;
