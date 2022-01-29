import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Bricklay from './Bricklay';

import smaller from './smaller-no-bg.png'; // do wywalenia

const wallColor = '#d3531e'; // #c2531e;
const wallShadowColor = '#f76331'; // #c2531e;
const mainWallWidth = '2.88rem';
const mainWallHeight = '131.5px';
const mainWallBottomPosition = '2.5px';
const mainWallLeftPosition = '29.7px';
const leftTowerHeight = `calc(${mainWallHeight} + 87.2px)`;
const leftTowerWidth = '43.2px';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 176px;
  height: 374px;
  //width: 205px;
  //height: 435px;
  //background: #2581bc; // do wywalenia
  background: url(${smaller}) center bottom no-repeat; // do wywalenia
  background-size: contain;
`;

const StMarysBasilicaWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MainWall = styled.span`
  bottom: ${mainWallBottomPosition};
  left: calc(${mainWallLeftPosition} + ${leftTowerWidth});
  width: ${mainWallWidth};
  height: ${mainWallHeight};
  background: ${wallColor};
`;

const Roof = styled.span`
  bottom: calc(${mainWallBottomPosition} + ${mainWallHeight});
  left: calc(${mainWallLeftPosition} + ${leftTowerWidth});
  width: ${mainWallWidth};
  height: 37.95px;
  background: #6b737b;
  &::before {
    content: '';
    top: 0;
    right: 0;
    border-width: 0 20px 33px 0;
    border-style: solid;
    border-color: transparent #465662;
  }
`;

const RoofTower = styled.span`
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 9.4px 16px;
  border-style: solid;
  border-color: ${wallColor} transparent;

  &::before {
    content: '';
    bottom: -16px;
    left: -15.5px;
    transform: translateX(50%);
    border-width: 0 6px 10px;
    border-style: solid;
    border-color: #943900 transparent;
  }
`;

const MainCross = styled.span`
  bottom: 50.5px;
  left: 10.8px;
  width: 6.8px;
  height: 16.6px;

  & ::before,
  & ::after {
    content: '';
  }
  span {
    &:nth-of-type(1) {
      bottom: 0;
      left: 1.3px;
      width: 2px;
      height: 5.2px;
      background: #7f8c90;
      &::before {
        bottom: 0;
        left: 2px;
        width: 2.3px;
        height: 5.2px;
        background: #6b737b;
      }
      &::after {
        top: -1px;
        width: 4.3px;
        height: 1px;
        background: #465662;
      }
    }
    &:nth-of-type(2) {
      left: 3.1px;
      width: 0.5px;
      height: 10.5px;
      background: #465662;
      &::before {
        top: -0.1px;
        left: -0.5px;
        width: 1.5px;
        height: 1.5px;
        border-radius: 50%;
        background: #465662;
      }
    }
    &:nth-of-type(3) {
      top: 3.2px;
      left: 0;
      width: 6.5px;
      height: 0.5px;
      background: #465662;
      &::before, &::after {
        top: -0.5px;
        width: 1.5px;
        height: 1.5px;
        border-radius: 50%;
        background: #465662;
      }
      &::before {
        left: -0.5px;
      }
      &::after {
        right: -0.5px;
      }
    }
  }
`;

const RoofWindow = styled.span`
  top: 25.2px;
  left: 12px;
  width: 5px;
  height: 3.2px;
  background: #94a5a6;
  &::after, &::before {
    content: '';
  }
  &::before {
    content: '';
    top: -3px;
    left: -0.6px;
    border-width: 0 3px 3px;
    border-style: solid;
    border-color: #94a5a6 transparent;
  }
  &::after {
    content: '';
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 3px;
    border-radius: .5px .5px 0 0;
    background: #7e8c90;
  }
`;

const LeftTower = styled.span`
  ${ElementsCommonStyleUnspecified};

  bottom: calc(${mainWallBottomPosition});
  left: ${mainWallLeftPosition};
  z-index: 2;
  width: ${leftTowerWidth};
  height: ${leftTowerHeight};
  background: ${wallColor};

  &::before, &::after {
    content: '';
  }
  &::before {
    top: 8px;
    right: 0;
    border-width: 68px 0 0 42px;
    border-style: solid;
    border-color: ${wallShadowColor} transparent;
  }
  &::after {
    left: 11px;
    width: 21.1px;
    height: 7.9px;
    background: ${wallShadowColor};
  }
`;

const Turret = styled.span`
  top: 2.9px;
  z-index: 2;
  width: 12px;
  &::before, &::after {
    content: '';
  }
  &::before {
    border-width: 0 0 5px 6px;
    border-style: solid;
    border-color: #c5c19d transparent;
  }
  &::after {
    right: 0;
    border-width: 0 6px 5px 0;
    border-style: solid;
    border-color: #e7e7d5 transparent;
  }
`;

const TurretLeft = styled(Turret)`
  left: 0;
`;

const TurretRight = styled(Turret)`
  right: 0;
`;

const LeftTowerBricklayLeft = styled(Bricklay)`
  && {
    top: 0;
    left: 9.2px;
    z-index: 2;
  }
`;

const LeftTowerBricklayRight = styled(Bricklay)`
  && {
    top: 0;
    right: 9.5px;
    z-index: 2;
  }
`;

const LeftTowerUpper = styled.span`
  bottom: calc(
    ${mainWallBottomPosition} + ${leftTowerHeight}
  );
  left: calc(${mainWallLeftPosition} + 11px);
  z-index: 1;
  width: 21.2px;
  height: 33.5px;
  background: ${wallShadowColor};
  &::before, &::after {
    content: '';
    top: 1.7px;
    width: 9.5px;
    height: 33.5px;
    background: ${wallShadowColor};
  }
  &::before {
    left: 100%;
    transform: skewY(20deg);
  }
  &::after {
    right: 100%;
    transform: skewY(-20deg);
  }
`;

const LeftTowerUpperBricklayLeft = styled(Bricklay)`
  && {
    top: 0;
    left: -2px;
    z-index: 2;
  }
`;

const LeftTowerUpperBricklayRight = styled(Bricklay)`
  && {
    top: 0;
    right: -2px;
    z-index: 2;
  }
`;

const LeftTowerUpperCornice = styled.span`
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 1px;
  background: #e7e7d5;
  &::before, &::after {
    content: '';
    bottom: .2px;
    width: 9.5px;
    height: 1px;
    background: #e7e7d5;
  }
  &::before {
    left: 100%;
    transform: rotate(-4deg);
  }
  &::after {
    right: 100%;
    transform: rotate(4deg);
  }
`;

const RightTower = styled.span`
  bottom: calc(${mainWallBottomPosition});
  left: calc(${mainWallLeftPosition} + 72px);
  width: 46.2px;
  height: calc(${mainWallHeight} + 83.35px);
  background: ${wallColor};
  &::before {
    content: '';
    top: 0;
    height: 97px;
    border-width: 0 46px 75px 0;
    border-style: solid;
    border-color: ${wallColor} transparent;
    background: ${wallShadowColor};
  }
`;

const TowerCornice = styled.span`
  top: ${(props) => props.top}px;
  right: -.9px;
  left:-.9px;
  height: 1.2px;
  &::before, &::after {
    content: '';
    width: 100%;
    height: .6px;
  }
  &::before {
    top: 0;
    background: #e7e7d6;
  }
  &::after {
    bottom: 0;
    background: #c1c099;
  }

  ${(props) => props.longer && css`
    right: -1.5px;
    left: -1.5px;
  `};
`;

export {
  Wrapper,
  StMarysBasilicaWrapper,
  MainWall,
  Roof,
  RoofTower,
  MainCross,
  RoofWindow,
  LeftTower,
  LeftTowerBricklayLeft,
  LeftTowerBricklayRight,
  TurretLeft,
  TurretRight,
  LeftTowerUpper,
  LeftTowerUpperBricklayLeft,
  LeftTowerUpperBricklayRight,
  LeftTowerUpperCornice,
  RightTower,
  TowerCornice
};
