import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  LeafOne,
  LeafTwo,
  LeafThree,
  LeafFour
} from './Leafs.styles.js';

const Leafs = (props) => (
  <Wrapper className={props.className}>
    <LeafOne color={props.color} variant={props.variant} />
    <LeafTwo color={props.color} variant={props.variant} />
    <LeafThree color={props.color} variant={props.variant} />
    <LeafFour color={props.color} variant={props.variant} />
  </Wrapper>
);

Leafs.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['pink', 'green']),
  variant: PropTypes.oneOf(['one', 'two', 'three']),
};

Leafs.defaultProps = {
  className: '',
  color: 'pink',
  variant: 'one'
};

export default Leafs;
