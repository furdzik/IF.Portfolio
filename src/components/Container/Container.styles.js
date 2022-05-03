import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: ${(props) => props.theme.layout.width};
  max-width: ${(props) => props.theme.layout.width};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.layout.sidePadding};
`;

export {
  Wrapper
};
