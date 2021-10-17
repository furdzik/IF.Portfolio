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
import Cat from '../elements/Cat';

const Heading = styled.h1`
  width: 100%;
  color: ${(props) => props.theme.color.violet};
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
  margin-top: -1rem;
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

const ListWrapper = styled.div`
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

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 2.2rem;

  &::before {
    display: inline-block;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    margin-right: 1.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme.color.violet};
    content: '';
  }

  & + & {
    margin-top: .5rem;
  }
`;

const Link = styled.a`
  display: block;
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
const WipBadge = styled.span`
  display: inline-block;
  background: #fff;
  border: 2px solid red;
  border-radius: 50%;
  color: red;
  padding: .5rem;
  height: 3rem;
  margin-left: 2rem;

  &::before {
  display: block;
  font-size: 1.2rem;
    content: 'WIP';
  }
`;

export {
  Heading,
  SubHeading,
  BoxStyled,
  MainBox,
  SocialIcons,
  SocialItem,
  SocialLink,
  ListWrapper,
  List,
  ListItem,
  Link,
  IconStyled,
  MeAndCatWrapper,
  CatStyled,
  WipBadge
};
