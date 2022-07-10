import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingEleven.styles.js';

const BuildingEleven = (props) => {
  const frontSide = (
    <FrontSideBlock>
      <span /><span /><span /><span />
    </FrontSideBlock>
  );
  const rightSide = (
    <RightSideBlock>
      <span /><span /><span />
    </RightSideBlock>
  );

  return (
    <Wrapper className={props.className}>
      <StyledBuilding
        width={9}
        height={16}
        frontBackSideColor="#edf2ec"
        leftRightSideColor="#f5dab5"
        topBottomSideColor="#ffcb83"
        frontSideBlock={frontSide}
        rightSideBlock={rightSide}
        transform="rotateY(-22deg) rotateX(-15deg) rotateZ(5deg)"
      />
    </Wrapper>
  );
};

BuildingEleven.propTypes = {
  className: PropTypes.string
};

BuildingEleven.defaultProps = {
  className: ''
};

export default BuildingEleven;
