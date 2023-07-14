import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Trunk,
  TrunkMain,
  BranchOne
} from './Tree.styles.js';

const Tree = (props) => (
  <Wrapper
    className={props.className}
    green={props.color === 'green'}
    isTaller={props.isTaller}
  >
    <Trunk isTaller={props.isTaller}>
      <TrunkMain isTaller={props.isTaller} />
      <BranchOne>
        <span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span />
      </BranchOne>
    </Trunk>
    {/* All branches: 10 */}
  </Wrapper>
);

Tree.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['pink', 'green']),
  isTaller: PropTypes.bool
};

Tree.defaultProps = {
  className: '',
  color: 'pink',
  isTaller: false
};

export default Tree;
