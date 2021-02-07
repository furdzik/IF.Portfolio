import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Separator.styles.js';

const Separator = (props) => (
  <Wrapper
    className={props.className}
  >
    <span /><span /><span /><span />
  </Wrapper>
);

Separator.propTypes = {
  className: PropTypes.string
};

Separator.defaultProps = {
  className: ''
};

export default Separator;
