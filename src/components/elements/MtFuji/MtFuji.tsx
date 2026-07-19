import React from 'react';

import { Wrapper } from './MtFuji.styles';

interface MtFujiProps {
  className?: string;
}

const MtFuji = ({ className = '' }: MtFujiProps) => (
  <Wrapper
    className={className}
  >
    <span /><span /><span /><span /><span />
  </Wrapper>
);

export default MtFuji;
