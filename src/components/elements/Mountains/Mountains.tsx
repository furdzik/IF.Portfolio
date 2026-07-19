import React from 'react';

import {
  Wrapper
} from './Mountains.styles';

interface MountainsProps {
  className?: string;
}

const Mountains = ({ className = '' }: MountainsProps) => (
  <Wrapper
    className={className}
  >
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </Wrapper>
);

export default Mountains;
