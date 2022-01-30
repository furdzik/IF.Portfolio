import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  TopLeftCorner,
  TopRightCorner,
  BottomLeftCorner,
  BottomRightCorner,
  RoundDecorationOne,
  RoundDecorationTwo,
  RoundDecorationThree,
  RoundDecorationFour,
  StarDecorationOne,
  StarDecorationTwo,
  StarDecorationThree
} from './Box.styles.js';

const Box = (props) => (
  <Wrapper
    className={props.className}
  >
    {
      props.showTapes ? (
        <React.Fragment>
          <TopLeftCorner />
          <TopRightCorner />
          <BottomLeftCorner />
          <BottomRightCorner />
        </React.Fragment>
      ) : null
    }
    {
      props.showDecorations ? (
        <React.Fragment>
          <StarDecorationOne color="#5319e7" size={10} />
          <StarDecorationTwo color="#e775a0" size={10} />
          <StarDecorationThree color="#ed0a5e" size={10} />
        </React.Fragment>
      ) : null
    }
    {props.children}
  </Wrapper>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showDecorations: PropTypes.bool,
  showTapes: PropTypes.bool
};

Box.defaultProps = {
  className: '',
  showDecorations: false,
  showTapes: false
};

export default Box;
