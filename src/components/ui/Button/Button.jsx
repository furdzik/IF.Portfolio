import React from 'react';
import PropTypes from 'prop-types';

import {
  ButtonWrapper
} from './Button.styles.js';

const Button = (props) => (
  <ButtonWrapper
    className={props.className}
    href={props.href}
    target={props.target}
  >
    {props.children}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string
};

Button.defaultProps = {
  className: '',
  href: '',
  target: ''
};

export default Button;
