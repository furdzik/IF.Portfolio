import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingSix.styles.js';

const BuildingSix = (props) => {
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
    <Wrapper className={props.className}>
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

BuildingSix.propTypes = {
  className: PropTypes.string
};

BuildingSix.defaultProps = {
  className: ''
};

export default BuildingSix;
