import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ElementsCommonStyle, ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 120px;
  height: 160px;
`;

const Building = styled.span`
  ${ElementsCommonStyleUnspecified};
  width: 130px;
  height: 160px;
  outline: 1px dotted green;

  transform-style: preserve-3d;
  transform: rotateY(33deg) rotateX(2deg);
`;

const Roof = styled.span`
  ${ElementsCommonStyle};
  transform: translateY(-100px) rotateX(90deg);
  background: grey;
  //height: 74px;
  z-index: 1;
`;

const FrontWall = styled.span`
  ${ElementsCommonStyle};
  //width: 90px;
  //height: 120px;
  //transform: translateZ(100px);
  background: #f2eadd;
`;

const SideWall = styled.span`
  ${ElementsCommonStyle};
  //transform: translateX(-100px);
  background: #e4c9b6;
  //&:before {
  //  content: '';
  //  border-width: 0 20px 33px 0;
  //  border-style: solid;
  //  border-color: transparent #e4c9b6;
  //}
`;

const SideWalk = styled.span`
  ${ElementsCommonStyleUnspecified};
`;

export {
  Wrapper,
  Building,
  Roof,
  FrontWall,
  SideWall,
  SideWalk
};
