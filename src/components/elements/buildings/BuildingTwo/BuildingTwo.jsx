import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Building,
  Roof,
  FrontWall,
  SideWall,
  SideWalk
} from './BuildingTwo.styles.js';

const BuildingTwo = (props) => (
  <Wrapper className={props.className}>
    <Building>
      <FrontWall>
        <span /><span /><span /><span />
      </FrontWall>
      <SideWall />
      <Roof />
    </Building>
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
