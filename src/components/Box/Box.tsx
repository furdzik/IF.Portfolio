import React from 'react';

import {
  Wrapper,
  TopLeftCorner,
  TopRightCorner,
  BottomLeftCorner,
  BottomRightCorner,
  StarDecorationOne,
  StarDecorationTwo,
  StarDecorationThree
} from './Box.styles';

export interface BoxProps {
  children: React.ReactNode;
  className?: string;
  showDecorations?: boolean;
  showTapes?: boolean;
}

const Box = ({ children, className = '', showDecorations = false, showTapes = false }: BoxProps) => (
  <Wrapper className={className}>
    {
      showTapes ? (
        <React.Fragment>
          <TopLeftCorner />
          <TopRightCorner />
          <BottomLeftCorner />
          <BottomRightCorner />
        </React.Fragment>
      ) : null
    }
    {
      showDecorations ? (
        <React.Fragment>
          <StarDecorationOne color="#5319e7" size={10} />
          <StarDecorationTwo color="#e775a0" size={10} />
          <StarDecorationThree color="#ed0a5e" size={10} />
        </React.Fragment>
      ) : null
    }
    {children}
  </Wrapper>
);

export default Box;
