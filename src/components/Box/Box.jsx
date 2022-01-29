import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  TopLeftCorner,
  TopRightCorner,
  BottomLeftCorner,
  BottomRightCorner
} from './Box.styles.js';

const Box = (props) => (
  <Wrapper
    className={props.className}
  >
    {/*<TopLeftCorner />*/}
    {/*<TopRightCorner />*/}
    {props.children}
    {/*<BottomLeftCorner />*/}
    {/*<BottomRightCorner />*/}
  </Wrapper>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Box.defaultProps = {
  className: ''
};

export default Box;
