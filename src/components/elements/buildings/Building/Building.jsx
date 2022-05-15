import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Cube,
  BackSide,
  LeftSide,
  RightSide,
  TopSide,
  BottomSide,
  FrontSide
} from './Building.styles.js';

const Building = (props) => (
  <Wrapper
    className={props.className}
    width={props.width}
    height={props.height}
  >
    <Cube transform={props.transform}>
      <BackSide frontBackSideColor={props.frontBackSideColor} />
      <LeftSide leftRightSideColor={props.leftRightSideColor} />
      <RightSide leftRightSideColor={props.leftRightSideColor} />
      <TopSide topBottomSideColor={props.topBottomSideColor} />
      <BottomSide topBottomSideColor={props.topBottomSideColor} />
      <FrontSide frontBackSideColor={props.frontBackSideColor} />
    </Cube>
  </Wrapper>
);

Building.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
  frontBackSideColor: PropTypes.string,
  leftRightSideColor: PropTypes.string,
  topBottomSideColor: PropTypes.string,
  transform: PropTypes.string
};

Building.defaultProps = {
  className: '',
  frontBackSideColor: 'transparent',
  leftRightSideColor: 'transparent',
  topBottomSideColor: 'transparent',
  transform: 'rotateY(33deg) rotateX(0)'
};

export default Building;
