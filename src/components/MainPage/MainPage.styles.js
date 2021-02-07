import styled from 'styled-components';

// import { breakpointMixin } from '@styles/mixins';

const Heading = styled.h1`
  color: ${(props) => props.theme.color.darkPink};
`;

const SubHeading = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.roboto};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.monoColors.black};
  font-size: 2.5rem;
  white-space: pre-line;
`;

export {
  Heading,
  SubHeading
};
