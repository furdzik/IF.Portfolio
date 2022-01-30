import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StarWrapper
} from './StarDecoration.styles.js';

const StarDecoration = (props) => (
  <Wrapper
    className={props.className}
    size={props.size}
  >
    <StarWrapper size={props.size} color={props.color}>
      <span />
      <span />
      <span />
      <span />
    </StarWrapper>
  </Wrapper>
);

StarDecoration.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number // in pixels
};

StarDecoration.defaultProps = {
  className: '',
  color: '#ff0000',
  size: 15
};

export default StarDecoration;
