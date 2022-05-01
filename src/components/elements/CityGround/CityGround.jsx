import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper
} from './CityGround.styles.js';

const CityGround = (props) => (
  <Wrapper
    className={props.className}
  >
    <span />
  </Wrapper>
);

CityGround.propTypes = {
  className: PropTypes.string
};

CityGround.defaultProps = {
  className: ''
};

export default CityGround;
