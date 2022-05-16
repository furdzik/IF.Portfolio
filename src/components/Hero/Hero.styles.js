import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { cloudType } from '@constants';

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

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#c3eeef 67%, #75d3a9); // 90%
`;

const ContainerStyled = styled(Container)`
  position: relative;
  height: 100%;
`;

const StyledCloud = styled(Cloud)`
  position: absolute;

  ${(props) => props.cloudType === cloudType.one && css`
    top: 2rem;
    left: 18rem;
  `};
  ${(props) => props.cloudType === cloudType.two && css`
    top: 3rem;
    right: -36rem;
  `};
  ${(props) => props.cloudType === cloudType.three && css`
    top: 16rem;
    right: -42rem;
  `};
  ${(props) => props.cloudType === cloudType.four && css`
    top: 5rem;
    right: -17rem;
  `};
  ${(props) => props.cloudType === cloudType.five && css`
    top: 2rem;
    left: -10rem;
  `};
  ${(props) => props.cloudType === cloudType.six && css`
    top: 7rem;
    left: 39rem;
  `};
  ${(props) => props.cloudType === cloudType.seven && css`
    top: 22rem;
    left: -34rem;
  `};
  ${(props) => props.cloudType === cloudType.eight && css`
    top: 5rem;
    right: -56rem;
  `};
  ${(props) => props.cloudType === cloudType.nine && css`
    top: 8rem;
    left: -46rem;
  `};
  ${(props) => props.cloudType === cloudType.ten && css`
    top: 4rem;
    right: 4rem;
  `};
  ${(props) => props.cloudType === cloudType.eleven && css`
    top: 5rem;
    left: -37rem;
  `};
  ${(props) => props.cloudType === cloudType.twelve && css`
    top: 16rem;
    right: -30rem;
  `};
  ${(props) => props.cloudType === cloudType.thirteen && css`
    top: 3rem;
    right: -9rem;
  `};
  ${(props) => props.cloudType === cloudType.fourteen && css`
    top: 4rem;
    left: 35rem;
  `};
  ${(props) => props.cloudType === cloudType.fifteen && css`
    top: 3rem;
    left: -14.5rem;
  `};
  ${(props) => props.cloudType === cloudType.sixteen && css`
    top: 30rem;
    right: -47rem;
  `};
`;

const StyledBirdOne = styled(Bird)`
  ${ElementsCommonStyleUnspecified};
  top: 10rem;
  bottom: auto;
  left: -22rem;
  transform: rotate(31deg);
`;

const StyledBirdTwo = styled(Bird)`
  ${ElementsCommonStyleUnspecified};
  top: 13rem;
  bottom: auto;
  left: -17rem;
  transform: rotate(-38deg);
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
  //outline: 1px dotted gray;
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
  //z-index: 1;
`;

const StyledMountains = styled(Mountains)`
  ${ElementsCommonStyle};
  right: -4rem;
  bottom: 45rem;
  z-index: 0;
`;

const TreeGreenCracowOne = styled(Tree)`
  ${ElementsCommonStyle};
  right: .4rem;
  bottom: 39.7rem;
  left: auto;
  z-index: 2;
  transform: scale(.3);
`;

const TreeGreenCracowTwo = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 5.1rem;
  left: 5.4rem;
  z-index: 3;
`;

const TreeGreenCracowThree = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 11.1rem;
  left: -3.5rem;
  z-index: 2;
`;

const TreeGreenCracowFour = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 3.9rem;
  left: 19.4rem;
  z-index: 2;
`;

const TreeGreenCracowFive = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: -22rem;
  z-index: 2;
`;

const TreeGreenCracowSix = styled(Tree)`
  ${ElementsCommonStyle};
  right: 5.4rem;
  bottom: 40.7rem;
  left: auto;
  z-index: 2;
  transform: scale(.3);
`;

const TreeGreenCracowSeven = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: -2.3rem;
  left: 39rem;
  z-index: 2;
  transform: scale(.5);
`;

const TreeGreenCracowEight = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 2.7rem;
  left: 31.8rem;
  z-index: 2;
  transform: scale(.5);
`;

const TreePinkTokyoOne = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 67rem;
  z-index: 3;
`;

const TreePinkTokyoTwo = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 59rem;
  z-index: 3;
`;

const TreePinkTokyoThree = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 86rem;
  z-index: 3;
`;

const TreePinkTokyoFour = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 109rem;
  z-index: 3;
`;

const TreePinkTokyoFive = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 7.6rem;
  left: 74.3rem;
  z-index: 2;
  transform: scale(.4);
`;

const TreePinkTokyoSix = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 8.8rem;
  left: 71.7rem;
  z-index: 2;
  transform: scale(.4);
`;

const TreePinkTokyoSeven = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 13.9rem;
  left: 68.2rem;
  z-index: 2;
  transform: scale(.4);
`;

const TreePinkTokyoEight = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 17.9rem;
  left: 66.2rem;
  z-index: 2;
  transform: scale(.4);
`;

const TreePinkTokyoNine = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 9.9rem;
  left: 36.2rem;
  z-index: 2;
  transform: scale(.3);
`;

const TreePinkTokyoTen = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 16.9rem;
  left: 41.2rem;
  z-index: 2;
  transform: scale(.3);
`;

const TreePinkTokyoEleven = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 19.9rem;
  left: 43.2rem;
  z-index: 2;
  transform: scale(.3);
`;

const StyledSkyTree = styled(SkyTree)`
  ${ElementsCommonStyle};
  bottom: -3rem;
  left: 54rem;
  z-index: 3;
  transform: scale(0.9);
`;

const StyledStMarysBasilica = styled(StMarysBasilica)`
  ${ElementsCommonStyleUnspecified};
  bottom: 36rem;
  left: 38.1rem;
  //z-index: 1110;
  //transform: translateX(-50%);
`;

const StyledTrainTracks = styled(TrainTracks)`
  ${ElementsCommonStyleUnspecified};
  bottom: 0;
  left: 20rem;
  z-index: 2;
`;

const StyledBuildingOne = styled(BuildingOne)`
  ${ElementsCommonStyleUnspecified};
  bottom: 27rem;
  left: 25rem;
`;

const StyledBuildingTwo = styled(BuildingTwo)`
  ${ElementsCommonStyleUnspecified};
  bottom: 26rem;
  left: 0;
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
  TreeGreenCracowOne,
  TreeGreenCracowTwo,
  TreeGreenCracowThree,
  TreeGreenCracowFour,
  TreeGreenCracowFive,
  TreeGreenCracowSix,
  TreeGreenCracowSeven,
  TreeGreenCracowEight,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  TreePinkTokyoThree,
  TreePinkTokyoFour,
  TreePinkTokyoFive,
  TreePinkTokyoSix,
  TreePinkTokyoSeven,
  TreePinkTokyoEight,
  TreePinkTokyoNine,
  TreePinkTokyoTen,
  TreePinkTokyoEleven,
  StyledSkyTree,
  StyledStMarysBasilica,
  StyledTrainTracks,
  StyledBuildingOne,
  StyledBuildingTwo
};
