import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonWrapper
} from './Button.styles.js';

const Button = (props) => (
  <ButtonWrapper
    className={props.className}
  >
    {props.children}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  className: ''
};

export default Button;
