import styled, { css } from 'styled-components';

import { cloudType } from '../../config/constants';

import { ElementsCommonStyle } from '../../styles/elementsCommonStyle.styles';

import Container from '../Container';
import Cloud from '../elements/Cloud';
import SkyTree from '../elements/SkyTree';
import MtFuji from '../elements/MtFuji';
import Tree from '../elements/Tree';
import Mountains from '../elements/Mountains';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60rem;
  overflow: hidden;
  background: linear-gradient(#c3eeef 90%, #75d3a9); // #77d4ab
`;

const ContainerStyled = styled(Container)`
  position: relative;
  height: 100%;
`;

const StyledCloud = styled(Cloud)`
  position: absolute;

  ${(props) => props.cloudType === cloudType.one && css`
    left: 18rem;
    top: 2rem;
  `};
   ${(props) => props.cloudType === cloudType.two && css`
    right: -36rem;
    top: 3rem;
  `};
   ${(props) => props.cloudType === cloudType.three && css`
    right: -42rem;
    top: 16rem;
  `};
   ${(props) => props.cloudType === cloudType.four && css`
    right: -17rem;
    top: 5rem;
  `};
   ${(props) => props.cloudType === cloudType.five && css`
    left: -4rem;
    top: 9rem;
  `};
   ${(props) => props.cloudType === cloudType.six && css`
    left: 39rem;
    top: 7rem;
  `};
   ${(props) => props.cloudType === cloudType.seven && css`
    left: -34rem;
    top: 22rem;
  `};
   ${(props) => props.cloudType === cloudType.eight && css`
    right: -56rem;
    top: 5rem;
  `};
   ${(props) => props.cloudType === cloudType.nine && css`
    left: -46rem;
    top: 8rem;
  `};
   ${(props) => props.cloudType === cloudType.ten && css`
    right: 4rem;
    top: 4rem;
  `};
   ${(props) => props.cloudType === cloudType.eleven && css`
    left: -37rem;
    top: 5rem;
  `};
   ${(props) => props.cloudType === cloudType.twelve && css`
    right: -30rem;
    top: 16rem;
  `};
   ${(props) => props.cloudType === cloudType.thirteen && css`
    right: -9rem;
    top: 3rem;
  `};
   ${(props) => props.cloudType === cloudType.fourteen && css`
    left: 35rem;
    top: 4rem;
  `};
   ${(props) => props.cloudType === cloudType.fifteen && css`
    left: -6rem;
    top: 9rem;
  `};
   ${(props) => props.cloudType === cloudType.sixteen && css`
    right: -47rem;
    top: 30rem;
  `};
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
  // background: #ff0000;
`;

const StyledMtFuji = styled(MtFuji)`
  ${ElementsCommonStyle};
  left: 18rem;
  bottom: 0;
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
  left: auto;
  bottom: 0;
  z-index: 2;
`;

const TreeGreenCracowTwo = styled(Tree)`
  ${ElementsCommonStyle};
  left: 5.4rem;
  bottom: 0;
  z-index: 3;
`;

const TreeGreenCracowThree = styled(Tree)`
  ${ElementsCommonStyle};
  left: 0;
  bottom: 0;
  z-index: 2;
`;

const TreeGreenCracowFour = styled(Tree)`
  ${ElementsCommonStyle};
  left: 19.4rem;
  bottom: 0;
  z-index: 2;
`;

const TreePinkTokyoOne = styled(Tree)`
  ${ElementsCommonStyle};
  left: 65rem;
  bottom: 0;
`;

const TreePinkTokyoTwo = styled(Tree)`
  ${ElementsCommonStyle};
  left: 57rem;
  bottom: 0;
`;

const TreePinkTokyoThree = styled(Tree)`
  ${ElementsCommonStyle};
  left: 86rem;
  bottom: 0;
`;

const TreePinkTokyoFour = styled(Tree)`
  ${ElementsCommonStyle};
  left: 109rem;
  bottom: 0;
`;

const StyledSkyTree = styled(SkyTree)`
  ${ElementsCommonStyle};
  left: 17rem;
  bottom: 0;
`;

export {
  Wrapper,
  ContainerStyled,
  StyledCloud,
  CracowWrapper,
  TokyoWrapper,
  StyledMtFuji,
  StyledMountains,
  TreeGreenCracowOne,
  TreeGreenCracowTwo,
  TreeGreenCracowThree,
  TreeGreenCracowFour,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  TreePinkTokyoThree,
  TreePinkTokyoFour,
  StyledSkyTree
};
