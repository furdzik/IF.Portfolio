import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

import Building from '@components/elements/buildings/Building';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 13.3rem;
  height: 21.5rem;
`;

const StyledBuilding = styled(Building)`
  ${ElementsCommonStyleUnspecified};
  right: 3.2rem;
  bottom: 2rem;
`;

const FrontSideBlock = styled.span`
  && {
    display: flex;
    flex-wrap: wrap;
    gap: 0 .85rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    margin: 2rem 1rem 0;
    padding: 1rem;
    background: #68beef;
    span {
      position: static;
      width: .7rem;
      height: calc(100% - .7rem);
      background: #ffffff;
      &:first-of-type {
        width: calc(100% + 2rem);
        height: .8rem;
        margin: -2.3rem -1rem 0;
        background: #e5e906;
      }
    }
  }
`;

const RightSideBlock = styled.span`
  && {
    position: static;
    overflow: hidden;
    span {
      position: static;
      display: block;
      height: .8rem;
      margin: .6rem 1.2rem;
      background: #1e8bc9;
      &:first-of-type {
        margin-top: 2rem;
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
