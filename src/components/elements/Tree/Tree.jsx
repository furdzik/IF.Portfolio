import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Trunk,
  TrunkMain,
  BranchOne,
  BranchTwo,
  BranchThree,
  BranchFour,
  BranchFive,
  BranchSix,
  BranchSeven,
  BranchEight
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
      </BranchOne>
      <BranchTwo>
        <span /><span /><span /><span /><span />
      </BranchTwo>
      <BranchThree>
        <span /><span /><span /><span /><span />
      </BranchThree>
      <BranchFour>
        <span /><span /><span /><span /><span />
      </BranchFour>
      <BranchFive>
        <span /><span /><span /><span /><span />
      </BranchFive>
      <BranchSix>
        <span /><span /><span /><span /><span />
      </BranchSix>
      <BranchSeven>
        <span /><span /><span /><span /><span />
      </BranchSeven>
      <BranchEight>
        <span /><span /><span /><span /><span />
      </BranchEight>
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
