import React from 'react';

import {
  AreaWrapper,
  CatWrapper,
  HeadWrapper,
  Torso,
  Leg,
  Tail
} from './Cat.styles';

interface CatProps {
  className?: string;
}

const Cat = ({ className = '' }: CatProps) => (
  <AreaWrapper
    className={className}
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

export default Cat;
