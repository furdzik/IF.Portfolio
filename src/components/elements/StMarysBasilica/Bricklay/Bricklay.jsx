import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import {
  BricklayWrapper,
  BrickWrapper,
  Brick
} from './Bricklay.styles.js';

const Bricklay = (props) => (
  <BricklayWrapper
    className={props.className}
    long={props.long}
    flip={props.flip}
    noShadow={props.noShadow}
  >
    <BrickWrapper noShadow={props.noShadow}>
      {
        Array.from({ length: props.long }).map(() => (
          <Brick key={uuidv4()} noShadow={props.noShadow} />
        ))
      }
    </BrickWrapper>
  </BricklayWrapper>
);

Bricklay.propTypes = {
  className: PropTypes.string,
  flip: PropTypes.bool,
  long: PropTypes.number, // number of elements
  noShadow: PropTypes.bool
};

Bricklay.defaultProps = {
  className: '',
  flip: false,
  long: 10,
  noShadow: false
};

export default Bricklay;
