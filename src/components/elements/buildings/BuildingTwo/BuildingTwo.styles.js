import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Building from '@components/elements/buildings/Building';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 15.5rem;
  height: 19.3rem;
`;

const StyledBuilding = styled(Building)`
  ${ElementsCommonStyleUnspecified};
  right: 3.2rem;
  bottom: 2rem;
`;

const SideWalk = styled.span`
  ${ElementsCommonStyleUnspecified};
  /* TODO */
`;

const FrontSideBlock = styled.span`
  && {
    width: 100%;
    height: 100%;
    span {
      position: static;
      display: block;
      height: 1rem;
      margin: .8rem 1rem;
      background: #5f81ae;
      &:first-of-type {
        margin-top: 1rem;
      }
    }
  }
`;

const LeftSideBlock = styled.span`
  && {
    position: static;
    overflow: hidden;
    span {
      position: static;
      display: block;
      height: 1rem;
      margin: .8rem 1rem;
      background: #314f75;
      &:first-of-type {
        margin-top: 1rem;
      }
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
