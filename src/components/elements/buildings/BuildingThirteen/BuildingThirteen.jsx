import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
} from './BuildingThirteen.styles.js';

const BuildingThirteen = (props) => {
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
    <Wrapper className={props.className}>
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

BuildingThirteen.propTypes = {
  className: PropTypes.string
};

BuildingThirteen.defaultProps = {
  className: ''
};

export default BuildingThirteen;
