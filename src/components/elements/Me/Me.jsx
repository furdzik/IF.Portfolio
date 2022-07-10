import React from 'react';
import PropTypes from 'prop-types';

import {
  AreaWrapper,
  MeWrapper,
  Hair,
  HeadWrapper,
  Face,
  Eyebrows,
  Eyes,
  Nose,
  Lips,
  Ear,
  Clothes,
  Arm,
  Hand,
  Legs,
  Leg
} from './Me.styles.js';

const Me = (props) => (
  <AreaWrapper
    className={props.className}
  >
    <MeWrapper>
      <HeadWrapper>
        <Hair><span /><span /><span /></Hair>
        <Face>
          <Eyebrows><span /><span /></Eyebrows>
          <Eyes><span /><span /></Eyes>
          <Nose />
          <Lips><span /><span /><span /><span /><span /><span /></Lips>
        </Face>
        <Ear />
      </HeadWrapper>
      <Clothes><span /><span /><span /><span /></Clothes>
      <Arm left><span /><span /><Hand /></Arm>
      <Arm right wave><span /><span /><Hand /></Arm>
      <Legs>
        <Leg left />
        <Leg right />
      </Legs>
    </MeWrapper>
  </AreaWrapper>
);

Me.propTypes = {
  className: PropTypes.string
};

Me.defaultProps = {
  className: ''
};

export default Me;
