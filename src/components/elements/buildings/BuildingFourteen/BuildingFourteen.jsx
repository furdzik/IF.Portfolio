import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingFourteen.styles.js';

const BuildingFourteen = (props) => {
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
    <Wrapper className={props.className}>
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

BuildingFourteen.propTypes = {
  className: PropTypes.string
};

BuildingFourteen.defaultProps = {
  className: ''
};

export default BuildingFourteen;
