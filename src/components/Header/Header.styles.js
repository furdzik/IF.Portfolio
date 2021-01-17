import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 0;
  margin-bottom: 3rem;
  background: ${(props) => props.theme.mainColors.primary};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.monoColors.white};
`;

export {
  Wrapper,
  Title
};
