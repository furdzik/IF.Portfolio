import React from 'react';
import PropTypes from 'prop-types';

import {
  AreaWrapper,
  CatWrapper,
  HeadWrapper,
  Torso,
  Leg,
  Tail
} from './Cat.styles.js';

const Cat = (props) => (
  <AreaWrapper
    className={props.className}
  >
    <CatWrapper>
      <HeadWrapper>
        <span /><span /><span />
        <span /><span /><span />
        <span /><span /><span />
        <span /><span />
      </HeadWrapper>
      <Torso />
      <Leg front>
        <span /><span /><span /><span />
      </Leg>
      <Leg hind>
        <span /><span />
      </Leg>
      <Tail>
        <span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span />
      </Tail>
    </CatWrapper>
  </AreaWrapper>
);

Cat.propTypes = {
  className: PropTypes.string
};

Cat.defaultProps = {
  className: ''
};

export default Cat;
