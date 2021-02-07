import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Tree.styles.js';

const Tree = (props) => (
  <Wrapper
    className={props.className}
    green={props.color === 'green'}
    isTaller={props.isTaller}
  >
    <span /><span /><span /><span /><span />
    <span /><span /><span /><span />
  </Wrapper>
);

Tree.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['pink', 'green']),
  isTaller: PropTypes.bool
};

Tree.defaultProps = {
  className: '',
  color: 'pink',
  isTaller: false
};

export default Tree;
