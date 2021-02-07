import styled, { css } from 'styled-components';

import Icon from '@mdi/react';
import {
  mdiGmail,
  mdiGithub,
  mdiLinkedin,
  mdiFacebook
} from '@mdi/js';

import Box from '../Box';
import Button from '../ui/Button';
// import { breakpointMixin } from '@styles/mixins';

const Heading = styled.h1`
  width: 100%;
  color: ${(props) => props.theme.color.darkPink};
`;

const SubHeading = styled.h2`
  margin-top: 2rem;
  font-family: ${(props) => props.theme.fontFamily.roboto};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.monoColors.black};
  font-size: 2.5rem;
  white-space: pre-line;
`;

const BoxStyled = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

const SocialIcons = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SocialItem = styled.li`
  & + & {
    margin-left: 2rem;
  }
`;

const SocialLink = styled.a`
  color: black;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10rem;
  width: 50%;
`;

const ButtonStyled = styled(Button)`
  & + & {
    margin-left: 3rem;
  }
`;

const IconStyled = styled(Icon)`
  width: 3rem;
  &:hover {
    opacity: .8;
  }

  ${(props) => props.path === mdiGmail && css`
    color: #eb4336;
  `};
  ${(props) => props.path === mdiGithub && css`
    color: #1b1f23;
  `};
  ${(props) => props.path === mdiLinkedin && css`
    color: #0077b7;
  `};
  ${(props) => props.path === mdiFacebook && css`
    color: #1877f2;
  `};
`;

export {
  Heading,
  SubHeading,
  BoxStyled,
  SocialIcons,
  SocialItem,
  SocialLink,
  ButtonsWrapper,
  ButtonStyled,
  IconStyled
};
