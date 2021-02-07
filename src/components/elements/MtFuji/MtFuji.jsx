import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './MtFuji.styles.js';

const MtFuji = (props) => (
  <Wrapper
    className={props.className}
  >
    <span /><span /><span /><span /><span />
  </Wrapper>
);

MtFuji.propTypes = {
  className: PropTypes.string
};

MtFuji.defaultProps = {
  className: ''
};

export default MtFuji;
