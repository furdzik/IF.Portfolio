import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { cloudType } from '@constants';

import { breakpointHeightMixin } from '@styles/mixins';

import {
  ElementsCommonStyle,
  ElementsCommonStyleUnspecified
} from '@styles/elementsCommonStyle.styles';

import Container from '@components/Container';

import Cloud from '@components/elements/Cloud';
import Bird from '@components/elements/Bird';
import SkyTree from '@components/elements/SkyTree';
import MtFuji from '@components/elements/MtFuji';
import CityGround from '@components/elements/CityGround';
import Tree from '@components/elements/Tree';
import River from '@components/elements/River';
import Mountains from '@components/elements/Mountains';
import StMarysBasilica from '@components/elements/StMarysBasilica';
import TrainTracks from '@components/elements/TrainTracks';
import BuildingOne from '@components/elements/buildings/BuildingOne';
import BuildingTwo from '@components/elements/buildings/BuildingTwo';
import BuildingThree from '@components/elements/buildings/BuildingThree';
import BuildingFour from '@components/elements/buildings/BuildingFour';
import BuildingFive from '@components/elements/buildings/BuildingFive';
import BuildingSix from '@components/elements/buildings/BuildingSix';
import BuildingSeven from '@components/elements/buildings/BuildingSeven';
import BuildingEight from '@components/elements/buildings/BuildingEight';
import BuildingNine from '@components/elements/buildings/BuildingNine';
import BuildingTen from '@components/elements/buildings/BuildingTen';
import BuildingEleven from '@components/elements/buildings/BuildingEleven';
import BuildingTwelve from '@components/elements/buildings/BuildingTwelve';
import BuildingThirteen from '@components/elements/buildings/BuildingThirteen';
import BuildingFourteen from '@components/elements/buildings/BuildingFourteen';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  /* background: linear-gradient(#c3eeef 67%, #75d3a9); // 90% */
  background: linear-gradient(0deg, #75d3a9 0%, #c3eeef 67%, #d5eff0 100%); /* 90% */
`;

const ContainerStyled = styled(Container)`
  position: relative;
  height: 100%;
`;

const StyledCloud = styled(Cloud)`
  position: absolute;
  display: none;
  scale: .6;

  ${breakpointHeightMixin.desktop(css`
    display: block;
  `)};

  ${(props) => props.cloudType === cloudType.one && css`
    top: 1rem;
    left: 18rem;
  `};
  ${(props) => props.cloudType === cloudType.two && css`
    top: 2rem;
    right: -36rem;
  `};
  ${(props) => props.cloudType === cloudType.three && css`
    top: 3rem;
    right: 14rem;
  `};
  ${(props) => props.cloudType === cloudType.four && css`
    top: 2rem;
    right: 47rem;
  `};
  ${(props) => props.cloudType === cloudType.five && css`
    top: 1rem;
    left: -10rem;
  `};
  ${(props) => props.cloudType === cloudType.six && css`
    top: 6rem;
    left: 39rem;
  `};
  ${(props) => props.cloudType === cloudType.seven && css`
    top: 12rem;
    left: -34rem;
  `};
  ${(props) => props.cloudType === cloudType.eight && css`
    top: 8rem;
    right: -53rem;
  `};
  ${(props) => props.cloudType === cloudType.nine && css`
    top: 6rem;
    left: -44rem;
  `};
  ${(props) => props.cloudType === cloudType.ten && css`
    top: 3rem;
    right: 4rem;
  `};
  ${(props) => props.cloudType === cloudType.eleven && css`
    top: 4.5rem;
    left: -37.4rem;
  `};
  ${(props) => props.cloudType === cloudType.twelve && css`
    top: 3.5rem;
    right: -32rem;
    z-index: 2;
  `};
`;

const StyledBirdOne = styled(Bird)`
  ${ElementsCommonStyleUnspecified};
  top: 10rem;
  bottom: auto;
  left: -22rem;
  transform: rotate(31deg);
  scale: .7;
`;

const StyledBirdTwo = styled(Bird)`
  ${ElementsCommonStyleUnspecified};
  top: 13rem;
  bottom: auto;
  left: -17rem;
  transform: rotate(-38deg);
  scale: .9;
`;

const StyledRiver = styled(River)`
  ${ElementsCommonStyleUnspecified};
  bottom: 0;
  left: -52.9rem;
  z-index: 2;
`;

const CracowWrapper = styled.div`
  position: absolute;
  right: 50%;
  width: 100%;
  height: 100%;
`;

const TokyoWrapper = styled.div`
  position: absolute;
  left: 50%;
  width: 100%;
  height: 100%;
`;

const StyledMtFuji = styled(MtFuji)`
  ${ElementsCommonStyle};
  bottom: 43.5rem;
  left: 40rem;
`;

const StyledCityGround = styled(CityGround)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 0;
`;

const StyledMountains = styled(Mountains)`
  ${ElementsCommonStyle};
  right: -4rem;
  bottom: 45rem;
  z-index: 0;
`;

const TreeCracowOne = styled(Tree)`
  ${ElementsCommonStyle};
  right: .4rem;
  bottom: 39.7rem;
  left: auto;
  z-index: 2;
  transform: scale(.3);
`;

const TreeCracowTwo = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 5.1rem;
  left: 5.4rem;
  z-index: 3;
`;

const TreeCracowThree = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 11.1rem;
  left: -3.5rem;
  z-index: 2;
`;

const TreeCracowFour = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 3.9rem;
  left: 19.4rem;
  z-index: 2;
`;

const TreeCracowFive = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: -22rem;
  z-index: 2;
`;

const TreeCracowSix = styled(Tree)`
  ${ElementsCommonStyle};
  right: 5.4rem;
  bottom: 40.7rem;
  left: auto;
  z-index: 2;
  transform: scale(.3);
`;

const TreeCracowSeven = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: -2.3rem;
  left: 39rem;
  z-index: 2;
  transform: scale(.5);
`;

const TreeCracowEight = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 2.7rem;
  left: 31.8rem;
  z-index: 2;
  transform: scale(.5);
`;

const TreeTokyoOne = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 67rem;
  z-index: 4;
`;

const TreeTokyoTwo = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 59rem;
  z-index: 4;
`;

const TreeTokyoThree = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 85rem;
  z-index: 4;
`;

const TreeTokyoFour = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 109rem;
  z-index: 4;
`;

const TreeTokyoFive = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 7.6rem;
  left: 78.3rem;
  z-index: 5;
  transform: scale(.4);
`;

const TreeTokyoSix = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 12.8rem;
  left: 74.7rem;
  z-index: 5;
  transform: scale(.4);
`;

const TreeTokyoSeven = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 13.9rem;
  left: 68.2rem;
  z-index: 3;
  transform: scale(.4);
`;

const TreeTokyoEight = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 17.9rem;
  left: 71.2rem;
  z-index: 4;
  transform: scale(.4);
`;

const TreeTokyoNine = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 9.9rem;
  left: 36.2rem;
  z-index: 2;
  transform: scale(.3);
`;

const TreeTokyoTen = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 16.9rem;
  left: 40.2rem;
  z-index: 2;
  transform: scale(.3);
`;

const TreeTokyoEleven = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 19.9rem;
  left: 42.2rem;
  z-index: 4;
  transform: scale(.3);
`;

const TreeTokyoTwelve = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 25.1rem;
  left: 8.2rem;
  z-index: 3;
  transform: scale(.3);
`;

const TreeTokyoThirteen = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 26.1rem;
  left: 17.2rem;
  z-index: 4;
  transform: scale(.3);
`;

const TreeTokyoFourteen = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 31.1rem;
  left: 34.2rem;
  z-index: 1;
  transform: scale(.3);
`;

const TreeTokyoFifteen = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 31.1rem;
  left: 39.2rem;
  z-index: 3;
  transform: scale(.3);
`;

const TreeTokyoSixteen = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 32.1rem;
  left: 42.2rem;
  z-index: 3;
  transform: scale(.3);
`;

const TreeTokyoSeventeen = styled(Tree)`
  ${ElementsCommonStyle};
  right: -40.8rem;
  bottom: 11.1rem;
  z-index: 2;
  transform: scale(.5);
`;

const TreeTokyoEighteen = styled(Tree)`
  ${ElementsCommonStyle};
  right: 12.2rem;
  bottom: 27.8rem;
  z-index: 2;
  transform: scale(.3);
`;

const TreeTokyoNineteen = styled(Tree)`
  ${ElementsCommonStyle};
  right: 15rem;
  bottom: 26.8rem;
  z-index: 3;
  transform: scale(.3);
`;

const StyledSkyTree = styled(SkyTree)`
  ${ElementsCommonStyle};
  bottom: -3rem;
  left: 54rem;
  z-index: 4;
  transform: scale(.9);
`;

const StyledStMarysBasilica = styled(StMarysBasilica)`
  ${ElementsCommonStyleUnspecified};
  bottom: 36rem;
  left: 38.1rem;
  /* display: none; */

  /* robocze
  // z-index: 1110;
  // bottom: 130px;
  // right: 30rem */
`;

const StyledTrainTracks = styled(TrainTracks)`
  ${ElementsCommonStyleUnspecified};
  bottom: 0;
  left: 19rem;
  z-index: 3;
`;

const StyledBuildingOne = styled(BuildingOne)`
  ${ElementsCommonStyleUnspecified};
  right: 21rem;
  bottom: 35rem;
`;

const StyledBuildingTwo = styled(BuildingTwo)`
  ${ElementsCommonStyleUnspecified};
  bottom: 26rem;
  left: 0;
  z-index: 3;
`;

const StyledBuildingThree = styled(BuildingThree)`
  ${ElementsCommonStyleUnspecified};
  bottom: 32rem;
  left: 11rem;
  z-index: 2;
`;

const StyledBuildingFour = styled(BuildingFour)`
  ${ElementsCommonStyleUnspecified};
  bottom: 34rem;
  left: 2rem;
  z-index: 1;
`;

const StyledBuildingFive = styled(BuildingFive)`
  ${ElementsCommonStyleUnspecified};
  bottom: 36rem;
  left: 24rem;
  z-index: 1;
`;

const StyledBuildingSix = styled(BuildingSix)`
  ${ElementsCommonStyleUnspecified};
  right: 4rem;
  bottom: 17rem;
  z-index: 5;
`;

const StyledBuildingSeven = styled(BuildingSeven)`
  ${ElementsCommonStyleUnspecified};
  right: 9.5rem;
  bottom: 19rem;
  z-index: 4;
`;

const StyledBuildingEight = styled(BuildingEight)`
  ${ElementsCommonStyleUnspecified};
  bottom: 35rem;
  left: 33.5rem;
  z-index: 1;
`;

const StyledBuildingNine = styled(BuildingNine)`
  ${ElementsCommonStyleUnspecified};
  bottom: 39rem;
  left: 39.5rem;
  z-index: 0;
`;

const StyledBuildingTen = styled(BuildingTen)`
  ${ElementsCommonStyleUnspecified};
  right: -32rem;
  bottom: 15rem;
  z-index: 2;
`;

const StyledBuildingEleven = styled(BuildingEleven)`
  ${ElementsCommonStyleUnspecified};
  right: -21rem;
  bottom: 19.5rem;
  z-index: 2;
`;

const StyledBuildingTwelve = styled(BuildingTwelve)`
  ${ElementsCommonStyleUnspecified};
  right: -11rem;
  bottom: 26.5rem;
  z-index: 1;
`;

const StyledBuildingThirteen = styled(BuildingThirteen)`
  ${ElementsCommonStyleUnspecified};
  right: 0;
  bottom: 26.5rem;
  z-index: 0;
`;

const StyledBuildingFourteen = styled(BuildingFourteen)`
  ${ElementsCommonStyleUnspecified};
  right: -28rem;
  bottom: 21.5rem;
  z-index: 0;
`;

export {
  Wrapper,
  ContainerStyled,
  StyledCloud,
  StyledBirdOne,
  StyledBirdTwo,
  StyledRiver,
  CracowWrapper,
  TokyoWrapper,
  StyledMtFuji,
  StyledCityGround,
  StyledMountains,
  TreeCracowOne,
  TreeCracowTwo,
  TreeCracowThree,
  TreeCracowFour,
  TreeCracowFive,
  TreeCracowSix,
  TreeCracowSeven,
  TreeCracowEight,
  TreeTokyoOne,
  TreeTokyoTwo,
  TreeTokyoThree,
  TreeTokyoFour,
  TreeTokyoFive,
  TreeTokyoSix,
  TreeTokyoSeven,
  TreeTokyoEight,
  TreeTokyoNine,
  TreeTokyoTen,
  TreeTokyoEleven,
  TreeTokyoTwelve,
  TreeTokyoThirteen,
  TreeTokyoFourteen,
  TreeTokyoFifteen,
  TreeTokyoSixteen,
  TreeTokyoSeventeen,
  TreeTokyoEighteen,
  TreeTokyoNineteen,
  StyledSkyTree,
  StyledStMarysBasilica,
  StyledTrainTracks,
  StyledBuildingOne,
  StyledBuildingTwo,
  StyledBuildingThree,
  StyledBuildingFour,
  StyledBuildingFive,
  StyledBuildingSix,
  StyledBuildingSeven,
  StyledBuildingEight,
  StyledBuildingNine,
  StyledBuildingTen,
  StyledBuildingEleven,
  StyledBuildingTwelve,
  StyledBuildingThirteen,
  StyledBuildingFourteen
};
