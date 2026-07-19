import React from 'react';

import {
  Wrapper,
  Cube,
  BackSide,
  LeftSide,
  RightSide,
  TopSide,
  BottomSide,
  FrontSide
} from './Building.styles';

export interface BuildingProps {
  height: number;
  width: number;
  className?: string;
  frontBackSideColor?: string;
  frontSideBlock?: React.ReactNode;
  leftRightSideColor?: string;
  leftSideBlock?: React.ReactNode;
  rightSideBlock?: React.ReactNode;
  topBottomSideColor?: string;
  topSideBlock?: React.ReactNode;
  transform?: string;
}

const Building = ({
  height,
  width,
  className = '',
  frontBackSideColor = 'transparent',
  frontSideBlock = null,
  leftRightSideColor = 'transparent',
  leftSideBlock = null,
  rightSideBlock = null,
  topBottomSideColor = 'transparent',
  topSideBlock = null,
  transform = 'rotateY(33deg) rotateX(0)'
}: BuildingProps) => (
  <Wrapper className={className} width={width} height={height}>
    <Cube transform={transform}>
      <BackSide frontBackSideColor={frontBackSideColor} />
      <LeftSide leftRightSideColor={leftRightSideColor}>
        {leftSideBlock}
      </LeftSide>
      <RightSide leftRightSideColor={leftRightSideColor}>
        {rightSideBlock}
      </RightSide>
      <TopSide topBottomSideColor={topBottomSideColor}>
        {topSideBlock}
      </TopSide>
      <BottomSide topBottomSideColor={topBottomSideColor} />
      <FrontSide frontBackSideColor={frontBackSideColor}>
        {frontSideBlock}
      </FrontSide>
    </Cube>
  </Wrapper>
);

export default Building;
