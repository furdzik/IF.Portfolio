import React from 'react';

import {
  Wrapper,
  Vistula,
  Arakawa
} from './River.styles';

interface RiverProps {
  className?: string;
}

const River = ({ className = '' }: RiverProps) => (
  <Wrapper
    className={className}
  >
    <Vistula>
      <span /><span /><span /><span /><span /><span /><span />
    </Vistula>
    <Arakawa>
      <span /><span /><span /><span /><span /><span /><span /><span />
    </Arakawa>
  </Wrapper>
);

export default River;
