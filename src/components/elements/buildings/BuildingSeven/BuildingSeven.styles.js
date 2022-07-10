import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Building from '@components/elements/buildings/Building';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 8.2rem;
  height: 20.5rem;
`;

const StyledBuilding = styled(Building)`
  ${ElementsCommonStyleUnspecified};
  left: 1.5rem;
`;

const FrontSideBlock = styled.span`
  && {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    span {
      position: static;
      display: block;
      flex-shrink: 0;
      width: .8rem;
      height: .8rem;
      margin: .4rem;
      background: #27396c;
      &:first-of-type {
        flex-grow: 3;
        width: 83%;
        background: #a2b700;
      }
    }
  }
`;

const RightSideBlock = styled.span`
  && {
    position: static;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    span {
      position: static;
      display: block;
      flex-shrink: 0;
      width: .8rem;
      height: .8rem;
      margin: .4rem;
      background: #27396c;
      &:first-of-type {
        flex-grow: 3;
        width: 83%;
        background: #c5c5c5;
      }
    }
  }
`;

export {
  Wrapper,
  StyledBuilding,
  FrontSideBlock,
  RightSideBlock
};
