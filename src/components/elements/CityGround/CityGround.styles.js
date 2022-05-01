import styled from '@emotion/styled';

import { ElementsCommonStyle } from '@styles/elementsCommonStyle.styles';

const Wrapper = styled.div`
  position: relative;
  width: 1230px;
  height: 500px;

  > span {
    &, &::before, &::after {
      ${ElementsCommonStyle};
    }
    &::before, &::after {
      content: '';
    }
    &:nth-of-type(1) {
      width: 100%;
      height: 100%;
      border-radius: 50% 50% 0 0;
      background: linear-gradient(#83dbb5 25%, #91ddc2 74%, #79d4ac 94%);
    }
  }
`;

export {
  Wrapper
};
