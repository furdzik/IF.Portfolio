import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper
} from './Mountains.styles.js';

const Mountains = (props) => (
  <Wrapper
    className={props.className}
  >
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </Wrapper>
);

Mountains.propTypes = {
  className: PropTypes.string
};

Mountains.defaultProps = {
  className: ''
};

export default Mountains;
