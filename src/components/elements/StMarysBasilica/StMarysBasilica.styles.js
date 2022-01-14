import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import smaller from './smaller.png'; // do wywalenia

const wallColor = '#d3531e'; // #c2531e;
const wallShadowColor = '#f76331'; // #c2531e;
const mainWallHeight = '131.5px';
const mainWallBottomPosition = '2.5px';
const mainWallLeftPosition = '29.7px';
const leftTowerHeight = `calc(${mainWallHeight} + 87.2px)`;
const leftTowerWidth = '43.2px';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 176px;
  height: 374px;
  background: #2581bc url(${smaller}) center bottom no-repeat; // do wywalenia
  background-size: contain;
`;

const StMarysBasilicaWrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 100%;
  height: 100%;
`;

const MainWall = styled.span`
  ${ElementsCommonStyleUnspecified};

  bottom: ${mainWallBottomPosition};
  left: calc(${mainWallLeftPosition} + ${leftTowerWidth});
  width: 2.87rem;
  height: ${mainWallHeight};
  background: ${wallColor};
`;

const LeftTower = styled.span`
  ${ElementsCommonStyleUnspecified};

  bottom: calc(${mainWallBottomPosition});
  left: ${mainWallLeftPosition};
  width: ${leftTowerWidth};
  height: ${leftTowerHeight};
  background: ${wallColor};
`;

const LeftTowerUpper = styled.span`
  ${ElementsCommonStyleUnspecified};

  bottom: calc(
    ${mainWallBottomPosition}
    + ${leftTowerHeight}
  );
  left: calc(${mainWallLeftPosition} + 11px);
  width: 21.2px;
  height: 33.5px;
  background: ${wallColor};
`;

const RightTower = styled.span`
  ${ElementsCommonStyleUnspecified};

  bottom: calc(${mainWallBottomPosition});
  left: calc(${mainWallLeftPosition} + 72px);
  width: 46.2px;
  height: calc(${mainWallHeight} + 83.35px);
  background: ${wallColor};
  &::after {
    content: '';
    height: 97px;
    top: 0;
    border-width: 0 46px 75px 0;
    border-style: solid;
    border-color: ${wallColor} transparent;
    background: ${wallShadowColor};
  }
`;

const Roof = styled.span``;

export {
  Wrapper,
  StMarysBasilicaWrapper,
  MainWall,
  LeftTower,
  LeftTowerUpper,
  RightTower
};
