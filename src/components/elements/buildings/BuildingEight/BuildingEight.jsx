import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingEight.styles.js';

const BuildingEight = (props) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span /><span /><span /><span /><span /><span />
    </FrontSideBlock>
  );
  const leftSide = (
    <RightSideBlock>
      <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span /><span /><span /><span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={props.className}>
      <StyledBuilding
        width={5}
        height={18}
        frontBackSideColor="#ededed"
        leftRightSideColor="#d5d8d9"
        topBottomSideColor="#dbdfe1"
        frontSideBlock={frontSide}
        leftSideBlock={leftSide}
        transform="rotateY(20deg) rotateX(-9deg) rotateZ(-3deg)"
      />
    </Wrapper>
  );
};

BuildingEight.propTypes = {
  className: PropTypes.string
};

BuildingEight.defaultProps = {
  className: ''
};

export default BuildingEight;
