import React from 'react';

import { Wrapper } from './Separator.styles';

interface SeparatorProps {
  className?: string;
}

const Separator = ({ className = '' }: SeparatorProps) => (
  <Wrapper
    className={className}
  >
    <span /><span /><span /><span />
  </Wrapper>
);

export default Separator;
