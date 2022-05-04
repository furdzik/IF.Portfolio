import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper
} from './BuildingOne.styles.js';

const BuildingOne = (props) => (
  <Wrapper className={props.className}>
    <span />
  </Wrapper>
);

BuildingOne.propTypes = {
  className: PropTypes.string
};

BuildingOne.defaultProps = {
  className: ''
};

export default BuildingOne;
