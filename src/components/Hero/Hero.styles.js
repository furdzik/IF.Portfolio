import styled from 'styled-components';

import {
  ElementsCommonStyle,
  ElementsSaferStyle
} from '../../styles/elementsCommonStyle.styles';

import Container from '../Container';
import Separator from '../elements/Separator';
import SkyTree from '../elements/SkyTree';
import MtFuji from '../elements/MtFuji';
import Tree from '../elements/Tree';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  background: linear-gradient(#c3eeef 80%, #71e385);
`;

const CommonGround = styled.div`
  ${ElementsCommonStyle};
  z-index: 3;
  width: 100%;
  height: 5rem;
  background: #77d4ab;
`;

const SeparatorStyled = styled(Separator)`
  ${ElementsSaferStyle};
  top: -1.2rem;
  left: 50%;
`;

const ContainerStyled = styled(Container)`
  position: relative;
  height: 100%;
`;

const CracowWrapper = styled.div`
  position: absolute;
  right: 47%;
  width: 100%;
  height: 100%;
`;

const TokyoWrapper = styled.div`
  position: absolute;
  left: 47%;
  width: 100%;
  height: 100%;
`;

const MtFujiStyled = styled(MtFuji)`
  ${ElementsCommonStyle};
  left: 16rem;
  bottom: 5rem;
`;

const TreeGreenCracow = styled(Tree)`
  ${ElementsCommonStyle};
  right: 5.4rem;
  left: auto;
  bottom: 5rem;
`;

const TreePinkTokyoOne = styled(Tree)`
  ${ElementsCommonStyle};
  left: 65rem;
  bottom: 5rem;
`;

const TreePinkTokyoTwo = styled(Tree)`
  ${ElementsCommonStyle};
  left: 57rem;
  bottom: 5rem;
`;

const SkyTreeStyled = styled(SkyTree)`
  ${ElementsCommonStyle};
  left: 9rem;
  bottom: 5rem;
`;

export {
  Wrapper,
  ContainerStyled,
  CommonGround,
  CracowWrapper,
  SeparatorStyled,
  TokyoWrapper,
  MtFujiStyled,
  TreeGreenCracow,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  SkyTreeStyled
};
