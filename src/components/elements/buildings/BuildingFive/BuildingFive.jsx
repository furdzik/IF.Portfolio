import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  LeftSideBlock
} from './BuildingFive.styles.js';

const BuildingFive = (props) => {
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
    <Wrapper className={props.className}>
      <StyledBuilding
        width={7.5}
        height={22.5}
        frontBackSideColor="#edf2ec"
        leftRightSideColor="#aed7ef"
        topBottomSideColor="#86c0e1"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(30deg) rotateX(-8deg) rotateZ(-4deg)"
      />
    </Wrapper>
  );
};

BuildingFive.propTypes = {
  className: PropTypes.string
};

BuildingFive.defaultProps = {
  className: ''
};

export default BuildingFive;
