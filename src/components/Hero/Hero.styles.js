import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { cloudType } from '@constants';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

import Container from '@components/Container';

import Cloud from '@components/elements/Cloud';
import Birds from '@components/elements/Birds';
import SkyTree from '@components/elements/SkyTree';
import MtFuji from '@components/elements/MtFuji';
import Tree from '@components/elements/Tree';
import Mountains from '@components/elements/Mountains';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60rem;
  background: linear-gradient(#c3eeef 90%, #75d3a9); // #77d4ab
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
    top: 9rem;
    left: -4rem;
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
    top: 9rem;
    left: -6rem;
  `};
  ${(props) => props.cloudType === cloudType.sixteen && css`
    top: 30rem;
    right: -47rem;
  `};
`;

const StyledBirds = styled(Birds)`
  position: absolute;
  top: 30rem;
  right: -27rem;
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
  bottom: 0;
  left: 18rem;
`;

const StyledMountains = styled(Mountains)`
  ${ElementsCommonStyle};
  right: -25rem; // -11rem;
  bottom: 0;
  z-index: 0;
`;

const TreeGreenCracowOne = styled(Tree)`
  ${ElementsCommonStyle};
  right: -16.6rem; // -2.6rem; // 6.4rem
  bottom: 0;
  left: auto;
  z-index: 2;
`;

const TreeGreenCracowTwo = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 5.4rem;
  z-index: 3;
`;

const TreeGreenCracowThree = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 0;
  z-index: 2;
`;

const TreeGreenCracowFour = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 19.4rem;
  z-index: 2;
`;

const TreeGreenCracowFive = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: -22rem;
  z-index: 2;
`;

const TreePinkTokyoOne = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 65rem;
`;

const TreePinkTokyoTwo = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 57rem;
`;

const TreePinkTokyoThree = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 86rem;
`;

const TreePinkTokyoFour = styled(Tree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 109rem;
`;

const StyledSkyTree = styled(SkyTree)`
  ${ElementsCommonStyle};
  bottom: 0;
  left: 17rem;
`;

export {
  Wrapper,
  ContainerStyled,
  StyledCloud,
  StyledBirds,
  CracowWrapper,
  TokyoWrapper,
  StyledMtFuji,
  StyledMountains,
  TreeGreenCracowOne,
  TreeGreenCracowTwo,
  TreeGreenCracowThree,
  TreeGreenCracowFour,
  TreeGreenCracowFive,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  TreePinkTokyoThree,
  TreePinkTokyoFour,
  StyledSkyTree
};
