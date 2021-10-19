import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Bird
} from './Birds.styles.js';

const Birds = (props) => (
  <Wrapper
    className={props.className}
  >
    <Bird>
      <span />
    </Bird>
    <Bird>
      <span />
    </Bird>
    <Bird>
      <span />
    </Bird>
  </Wrapper>
);

Birds.propTypes = {
  className: PropTypes.string
};

Birds.defaultProps = {
  className: ''
};

export default Birds;
