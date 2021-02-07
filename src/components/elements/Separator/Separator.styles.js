import styled from 'styled-components';

import { ElementsSaferStyle } from '../../../styles/elementsCommonStyle.styles';

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
  span:nth-child(2),
  span:nth-child(4) {
    transform: rotate(40deg);
  }
  span:nth-child(1),
  span:nth-child(3),
  &::after {
    transform: rotate(-40deg);
  }
  span {
    &:nth-child(1) {
      top: 6rem;
    }
    &:nth-child(2) {
      top: 13.4rem;
    }
    &:nth-child(3) {
      top: 20.9rem;
    }
    &:nth-child(4) {
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
