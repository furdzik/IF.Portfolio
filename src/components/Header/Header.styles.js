import styled from 'styled-components';

const Wrapper = styled.header`
  position: relative;
  z-index: 3;
  padding: 1rem 0;
  background: ${(props) => props.theme.mainColors.primary};
  box-shadow: 1px 1px 20px 3px rgb(0 0 0 / 30%);
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.roboto};
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
  color: ${(props) => props.theme.monoColors.bold};
`;

export {
  Wrapper,
  Title
};
