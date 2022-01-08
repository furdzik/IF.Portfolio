import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Icon from '@mdi/react';
import {
  mdiGmail,
  mdiGithub,
  mdiLinkedin,
  mdiStackOverflow
} from '@mdi/js';

import { breakpointMixin } from '@styles/mixins';

import Box from '../Box';
import Cat from '../elements/Cat';

const Heading = styled.h1`
  width: 100%;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.color.violet};
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

  ${breakpointMixin.portraitTablet(css`
    width: auto;
    order: 1;
  `)};
`;

const BoxStyled = styled(Box)`
  z-index: 3;
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

  ${breakpointMixin.portraitTablet(css`
    margin-top: -3rem;
    order: 3;
  `)};
  ${breakpointMixin.laptop(css`
    order: 4;
  `)};
`;

const SocialItem = styled.li`
  & + & {
    margin-left: 2rem;
  }
`;

const SocialLink = styled.a`
  display: block;
`;

const IconStyled = styled(Icon)`
  width: 3rem;
  height: 3rem;
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
  ${(props) => props.path === mdiStackOverflow && css`
    color: #f48225;
  `};
`;

const ListWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  margin-top: 5rem;

  ${breakpointMixin.portraitTablet(css`
    order: 4;
    margin-top: 0;
    width: 40%;
  `)};
  ${breakpointMixin.laptop(css`
    order: 2;
    flex-direction: row;
    margin-left: 5rem;
  `)};
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
    content: '';
    display: inline-block;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    margin-right: 1.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme.color.violet};
  }

  & + & {
    margin-top: .5rem;
  }
`;

const Link = styled.a`
  display: block;
`;

const MeAndCatWrapper = styled.div`
  position: relative;
  order: 2;
  margin: 4rem 0 0 4rem; /* do zmiany */

  ${breakpointMixin.portraitTablet(css`
    margin-left: auto;
  `)};
  ${breakpointMixin.laptop(css`
    order: 3;
    margin-left: 4rem;
  `)};
`;

const CatStyled = styled(Cat)`
  position: absolute;
  bottom: 0;
  left: -6rem;
`;
const WipBadge = styled.span`
  display: inline-block;
  height: 3rem;
  margin-left: 2rem;
  padding: .5rem;
  border: 2px solid red;
  border-radius: 50%;
  background: #ffffff;
  color: red;

  &::before {
    content: 'WIP';
    display: block;
    font-size: 1.2rem;
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
  IconStyled,
  ListWrapper,
  List,
  ListItem,
  Link,
  MeAndCatWrapper,
  CatStyled,
  WipBadge
};
