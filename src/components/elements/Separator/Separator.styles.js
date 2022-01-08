import styled from '@emotion/styled';

import { ElementsSaferStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  z-index: 2;
  height: 100%;
  &::before,
  &::after {
    content: '';
  }
  span,
  &::before,
  &::after {
    ${ElementsSaferStyle};
    height: 10rem;
    border: .2rem solid ${(props) => props.theme.monoColors.black};
  }
  &::before {
    top: -1.5rem;
  }
  &::before,
  span:nth-of-type(2),
  span:nth-of-type(4) {
    transform: rotate(40deg);
  }
  span:nth-of-type(1),
  span:nth-of-type(3),
  &::after {
    transform: rotate(-40deg);
  }
  span {
    &:nth-of-type(1) {
      top: 6rem;
    }
    &:nth-of-type(2) {
      top: 13.4rem;
    }
    &:nth-of-type(3) {
      top: 20.9rem;
    }
    &:nth-of-type(4) {
      top: 28.4rem;
    }
  }
  &::after {
    top: 35.9rem;
  }
`;

export {
  Wrapper
};
