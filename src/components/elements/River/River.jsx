import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Vistula
} from './River.styles.js';

const River = (props) => (
  <Wrapper
    className={props.className}
  >
    <Vistula>
      <span /><span /><span /><span /><span /><span /><span />
    </Vistula>
  </Wrapper>
);

River.propTypes = {
  className: PropTypes.string
};

River.defaultProps = {
  className: ''
};

export default River;
