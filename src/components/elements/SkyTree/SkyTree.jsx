import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper
} from './SkyTree.styles.js';

const SkyTree = (props) => (
  <Wrapper
    className={props.className}
  >
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span>
      <span /><span /><span />
      <span /><span /><span />
    </span>
    <span />
    <span>
      <span /><span /><span />
      <span /><span /><span />
    </span>
    <span />
    <span />
    <span />
  </Wrapper>
);

SkyTree.propTypes = {
  className: PropTypes.string
};

SkyTree.defaultProps = {
  className: ''
};

export default SkyTree;
