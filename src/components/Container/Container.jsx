import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Container.styles.js';

const Container = (props) => (
  <Wrapper
    className={props.className}
  >
    {props.children}
  </Wrapper>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Container.defaultProps = {
  className: ''
};

export default Container;
