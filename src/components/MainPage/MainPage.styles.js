import styled, { css } from 'styled-components';

import Icon from '@mdi/react';
import {
  mdiGmail,
  mdiGithub,
  mdiLinkedin,
  mdiFacebook
} from '@mdi/js';

import { breakpointMixin } from '../../styles/mixins';

import Box from '../Box';
import Button from '../ui/Button';
import Cat from '../elements/Cat';

const Heading = styled.h1`
  width: 100%;
  color: ${(props) => props.theme.color.darkPink};
  margin-bottom: 2rem;
`;

const SubHeading = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.roboto};
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.monoColors.black};
  white-space: pre-line;
`;

const MainBox = styled.div`
  width: 100%;
  ${breakpointMixin.portraitTablet`
    width: auto;
    order: 1;
  `}
`;

const BoxStyled = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const SocialIcons = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 4rem;

  ${breakpointMixin.portraitTablet`
    margin-top: -5rem;
    order: 3;
  `}
  ${breakpointMixin.laptop`
    order: 4;
  `}
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
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 5rem;

  ${breakpointMixin.portraitTablet`
    margin-top: 0;
    width: 40%;
    order: 4;
  `}
  ${breakpointMixin.laptop`
    flex-direction: row;
    margin-left: 5rem;
    order: 2;
  `}
`;

const ButtonStyled = styled(Button)`
  & + & {
    margin-top: 3rem;
  }
  ${breakpointMixin.laptop`
    & + & {
      margin-top: 0;
      margin-left: 3rem;
    }
  `}
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
    color: #0a66c2;
  `};
  ${(props) => props.path === mdiFacebook && css`
    color: #1877f2;
  `};
`;

const MeAndCatWrapper = styled.div`
  position: relative;
  margin: 7rem 0 0 4rem; // do zmiany
  order: 2;

  ${breakpointMixin.portraitTablet`
    margin-left: auto;
  `}
  ${breakpointMixin.laptop`
    order: 3;
    margin-left: 4rem;
  `}
`;

const CatStyled = styled(Cat)`
  position: absolute;
  left: -6rem;
  bottom: 0;
`;

export {
  Heading,
  SubHeading,
  BoxStyled,
  MainBox,
  SocialIcons,
  SocialItem,
  SocialLink,
  ButtonsWrapper,
  ButtonStyled,
  IconStyled,
  MeAndCatWrapper,
  CatStyled
};
