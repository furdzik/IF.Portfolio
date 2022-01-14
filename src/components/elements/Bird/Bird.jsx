import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  BirdWrapper
} from './Bird.styles.js';

const Bird = (props) => (
  <Wrapper
    className={props.className}
  >
    <BirdWrapper color={props.color}>
      <span />
    </BirdWrapper>
  </Wrapper>
);

Bird.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string // A #rgb color
};

Bird.defaultProps = {
  className: '',
  color: null
};

export default Bird;
