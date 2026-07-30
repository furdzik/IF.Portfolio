import styled from '@emotion/styled/macro';

import { breakpoints } from 'styles/basic';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.layout.sidePadding};

  @media (min-width: ${breakpoints.portraitTablet}) {
    max-width: ${(props) => props.theme.layout.width};
  }
`;

export {
  Wrapper
};
