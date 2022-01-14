import styled from '@emotion/styled';

import { ElementsCommonStyleUnspecified } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  ${ElementsCommonStyleUnspecified};
  width: 5rem;
  height: 2rem;
`;

const BirdWrapper = styled.div`
  --birdColor: ${(props) => props.color ? props.color : '#000000'};

  ${ElementsCommonStyleUnspecified};

  width: 100%;
  height: 100%;

  &::before, &::after {
    content: '';
  }

  &::before {
    bottom: .8rem;
    width: 5rem;
    height: 1.9rem;
    border-bottom: .5rem solid var(--birdColor);
    border-radius: 50%;
  }
  &::after {
    bottom: 1.3rem;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 .2rem .4rem .2rem;
    border-style: solid;
    border-color: var(--birdColor) transparent;
  }
  span {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: .7rem;
    border-width: 0 .3rem 1.4rem .3rem;
    border-style: solid;
    border-color: var(--birdColor) transparent;
  }
`;

export {
  Wrapper,
  BirdWrapper
};
