import React from 'react';

import {
  Wrapper,
  GiewontMt,
  HillOne,
  HillTwo,
  HillThree,
  HillFour
} from './Mountains.styles';

interface MountainsProps {
  className?: string;
}

const Mountains = ({ className = '' }: MountainsProps) => (
  <Wrapper
    className={className}
  >
    <HillOne />
    <HillTwo />
    <HillThree />
    <HillFour />
    <GiewontMt>
      <span /><span /><span />
    </GiewontMt>
  </Wrapper>
);

export default Mountains;
