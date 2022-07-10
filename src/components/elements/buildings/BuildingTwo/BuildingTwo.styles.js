import styled from '@emotion/styled';
// import { css } from '@emotion/react';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Building from '@components/elements/buildings/Building';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 133px;
  height: 190px;
  //outline: 1px dotted green;
`;

const StyledBuilding = styled(Building)`
  ${ElementsCommonStyleUnspecified};
  right: 3.2rem;
  bottom: 2rem;
`;

const SideWalk = styled.span`
  ${ElementsCommonStyleUnspecified};
`;

const FrontSideBlock = styled.span`
  && {
    width: 100%;
    height: 100%;
    span {
      position: static;
      display: block;
      margin: 10px;
      height: 10px;
      background: #5f81ae;
    }
  }
`;

const LeftSideBlock = styled.span`
  && {
    overflow: hidden;
    position: static;
    span {
      position: static;
      display: block;
      margin: 12px;
      height: 8px;
      background: #314f75;
    }
  }
`;

export {
  Wrapper,
  StyledBuilding,
  SideWalk,
  FrontSideBlock,
  LeftSideBlock
};
