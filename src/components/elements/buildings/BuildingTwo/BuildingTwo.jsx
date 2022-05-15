import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StyledBuilding,
  SideWalk
} from './BuildingTwo.styles.js';

const BuildingTwo = (props) => (
  <Wrapper className={props.className}>
    <StyledBuilding
      width={8.5}
      height={12}
      frontBackSideColor="#f2e8de"
      leftRightSideColor="#dcc2a9"
      topBottomSideColor="#dcc2a9"
      transform="rotateY(36deg) rotateX(0)"
    />
    <SideWalk />
  </Wrapper>
);

BuildingTwo.propTypes = {
  className: PropTypes.string
};

BuildingTwo.defaultProps = {
  className: ''
};

export default BuildingTwo;
