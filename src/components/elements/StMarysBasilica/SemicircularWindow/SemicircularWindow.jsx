import React from 'react';
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from "uuid";

import {
  SemicircularWindowWrapper
} from './SemicircularWindow.styles.js';

const SemicircularWindow = (props) => (
  <SemicircularWindowWrapper
    className={props.className}
  >

  </SemicircularWindowWrapper>
);

SemicircularWindow.propTypes = {
  className: PropTypes.string
};

SemicircularWindow.defaultProps = {
  className: ''
};

export default SemicircularWindow;
