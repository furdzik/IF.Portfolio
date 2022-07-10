import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingTwelve.styles.js';

const BuildingTwelve = (props) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span />
    </FrontSideBlock>
  );
  const rightSide = (
    <RightSideBlock>
      <span /><span /><span /><span /><span /><span /><span />
      <span /><span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={props.className}>
      <StyledBuilding
        width={8}
        height={17}
        frontBackSideColor="#ffffff"
        leftRightSideColor="#e9edef"
        topBottomSideColor="#dbdfe1"
        frontSideBlock={frontSide}
        rightSideBlock={rightSide}
        transform="rotateY(-22deg) rotateX(-15deg) rotateZ(5deg)"
      />
    </Wrapper>
  );
};

BuildingTwelve.propTypes = {
  className: PropTypes.string
};

BuildingTwelve.defaultProps = {
  className: ''
};

export default BuildingTwelve;
