import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.layout.sidePadding};

  ${breakpointMixin.portraitTablet(css`
    width: ${(props) => props.theme.layout.width};
    max-width: ${(props) => props.theme.layout.width};
  `)};
`;

export {
  Wrapper
};
