import styled from 'styled-components';

import { ElementsCommonStyle } from '../../styles/elementsCommonStyle.styles';

import Container from '../Container';
import SkyTree from '../elements/SkyTree';
import MtFuji from '../elements/MtFuji';
import Tree from '../elements/Tree';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60rem;
  overflow: hidden;
  background: linear-gradient(#c3eeef 90%, #77d4ab); // #77d4ab
`;

const ContainerStyled = styled(Container)`
  position: relative;
  height: 100%;
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
  left: 9rem;
  bottom: 0;
`;

export {
  Wrapper,
  ContainerStyled,
  CracowWrapper,
  TokyoWrapper,
  MtFujiStyled,
  TreeGreenCracow,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  SkyTreeStyled
};
