import styled, { css } from 'styled-components';

import { cloudType } from '../../config/constants';

import { ElementsCommonStyle } from '../../styles/elementsCommonStyle.styles';

import Container from '../Container';
import Cloud from '../elements/Cloud';
import SkyTree from '../elements/SkyTree';
import MtFuji from '../elements/MtFuji';
import Tree from '../elements/Tree';

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
  top: 2rem;

  ${(props) => props.cloudType === cloudType.one && css`
    left: 18rem;
    top: 2rem;
  `};
   ${(props) => props.cloudType === cloudType.two && css`
    left: -2rem;
    top: 10rem;
  `};
   ${(props) => props.cloudType === cloudType.three && css`
    right: -42rem;
    top: 16rem;
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

const MtFujiStyled = styled(MtFuji)`
  ${ElementsCommonStyle};
  left: 18rem;
  bottom: 0;
`;

const TreeGreenCracow = styled(Tree)`
  ${ElementsCommonStyle};
  right: 5.4rem;
  left: auto;
  bottom: 0;
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

const SkyTreeStyled = styled(SkyTree)`
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
  MtFujiStyled,
  TreeGreenCracow,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  SkyTreeStyled
};
