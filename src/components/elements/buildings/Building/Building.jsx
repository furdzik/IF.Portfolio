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
      <LeftSide leftRightSideColor={props.leftRightSideColor}>
        {props.leftSideBlock}
      </LeftSide>
      <RightSide leftRightSideColor={props.leftRightSideColor}>
        {props.rightSideBlock}
      </RightSide>
      <TopSide topBottomSideColor={props.topBottomSideColor}>
        {props.topSideBlock}
      </TopSide>
      <BottomSide topBottomSideColor={props.topBottomSideColor} />
      <FrontSide frontBackSideColor={props.frontBackSideColor}>
        {props.frontSideBlock}
      </FrontSide>
    </Cube>
  </Wrapper>
);

Building.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  className: PropTypes.string,
  frontBackSideColor: PropTypes.string,
  frontSideBlock: PropTypes.node,
  leftRightSideColor: PropTypes.string,
  leftSideBlock: PropTypes.node,
  rightSideBlock: PropTypes.node,
  topBottomSideColor: PropTypes.string,
  topSideBlock: PropTypes.node,
  transform: PropTypes.string
};

Building.defaultProps = {
  className: '',
  frontBackSideColor: 'transparent',
  frontSideBlock: null,
  rightSideBlock: null,
  leftSideBlock: null,
  topSideBlock: null,
  leftRightSideColor: 'transparent',
  topBottomSideColor: 'transparent',
  transform: 'rotateY(33deg) rotateX(0)'
};

export default Building;
