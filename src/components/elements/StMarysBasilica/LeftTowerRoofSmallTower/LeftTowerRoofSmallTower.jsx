import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  BaseWall,
  Roof
} from './LeftTowerRoofSmallTower.styles.js';

const LeftTowerRoofSmallTower = (props) => (
  <Wrapper
    className={props.className}
    scalex={props.scalex}
  >
    <BaseWall skew={props.skew} />
    <Roof skew={props.skew} scalex={props.scalex}>
      <span /><span /><span /><span />
    </Roof>
  </Wrapper>
);

LeftTowerRoofSmallTower.propTypes = {
  className: PropTypes.string,
  scalex: PropTypes.bool,
  skew: PropTypes.bool
};

LeftTowerRoofSmallTower.defaultProps = {
  className: '',
  scalex: false,
  skew: false
};

export default LeftTowerRoofSmallTower;
