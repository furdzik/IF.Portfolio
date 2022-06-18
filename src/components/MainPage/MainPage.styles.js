import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Icon from '@mdi/react';
import {
  mdiGmail,
  mdiGithub,
  mdiLinkedin,
  mdiStackOverflow
} from '@mdi/js';

import { NUMBER_BUTTON_TYPE, STACK_BADGE_TYPE } from '@constants';

import { breakpointMixin } from '@styles/mixins';

import Box from '@components/Box';
import Container from '@components/Container';
import Footer from '@components/Footer';

import Cat from '@components/elements/Cat';

const Heading = styled.h1`
  width: 100%;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.violet};
`;

const SubHeading = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.roboto};
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  color: ${(props) => props.theme.monoColors.black};
  white-space: pre-line;
`;

const StyledContainer = styled(Container)`
  position: absolute;
  bottom: 4%;
  left: 50%;
  z-index: 3;
  transform: translateX(-50%);
`;

const StyledBox = styled(Box)`
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: linear-gradient(#ffffff 67%, rgb(255 255 255 / 88%));
`;

const MainBox = styled.div`
  width: 100%;

  ${breakpointMixin.portraitTablet(css`
    order: 1;
    width: auto;
  `)};
`;

const SocialIcons = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 4rem;

  ${breakpointMixin.portraitTablet(css`
    order: 3;
    margin-top: -1rem;
    margin-bottom: -3rem;
  `)};
  ${breakpointMixin.laptop(css`
    order: 4;
  `)};
`;

const SocialItem = styled.li`
  display: flex;
  align-items: center;
  & + & {
    margin-left: 1rem;
  }
`;

const SocialLink = styled.a`
  display: flex;
`;

const AdditionalInfoBox = styled.span`
  display: flex;
  flex-flow: row wrap;
  margin-left: .5rem;
  line-height: 1;
`;

const StatsWrapper = styled.span`
  display: flex;
  align-items: center;
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
  order: 2;
  width: 100%;
  margin-top: 5rem;

  ${breakpointMixin.landscapeTablet(css`
    order: 2;
    width: 38%;
    margin-top: 0;
    margin-left: 2rem;
  `)};
  ${breakpointMixin.laptop(css`
    flex-direction: row;
    order: 2;
    margin-left: 7rem;
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
  font-size: 2rem;

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
  border: .2rem solid ${(props) => props.theme.color.red};
  border-radius: 50%;
  color: ${(props) => props.theme.color.red};
  vertical-align: middle;

  &::before {
    content: 'WIP';
    display: block;
    font-size: 1.2rem;
  }
`;

const Number = styled.span`
  flex-shrink: 0;
  margin-left: .5rem;
  padding: .1rem .5rem;
  border-radius: 2rem;
  font-size: 1rem;
  line-height: 1.4;
  color: ${(props) => props.theme.monoColors.white};

  ${(props) => props.type === NUMBER_BUTTON_TYPE.contributions && css`
    background: #40c463;
  `};
  ${(props) => props.type === NUMBER_BUTTON_TYPE.reputation && css`
    background: #f48225;
  `};
`;

const StackBadges = styled.ul`
  display: flex;
  margin-left: .5rem;
`;

const StackBadge = styled.li`
  display:  flex;
  align-items: center;
  margin-right: .5rem;

  &::before {
    content: '';
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    margin-top: -.1rem;
    margin-right: .2rem;
    border-radius: 50%;
  }

  ${(props) => props.type === STACK_BADGE_TYPE.gold && css`
    &::before {
      background: #ffcc01;
    }
  `};
  ${(props) => props.type === STACK_BADGE_TYPE.silver && css`
    &::before {
      background: #b4b8bc;
    }
  `};
  ${(props) => props.type === STACK_BADGE_TYPE.bronze && css`
    &::before {
      background: #d1a684;
    }
  `};
`;

const StyledFooter = styled(Footer)`
  position: absolute;
  right: -5rem;
  bottom: 6.5rem;
  transform: rotate(-90deg);
  transform-origin: center;
  font-size: .9rem;
  color: #646464;
`;

export {
  Heading,
  SubHeading,
  StyledContainer,
  StyledBox,
  MainBox,
  SocialIcons,
  SocialItem,
  SocialLink,
  AdditionalInfoBox,
  StatsWrapper,
  IconStyled,
  ListWrapper,
  List,
  ListItem,
  Link,
  MeAndCatWrapper,
  CatStyled,
  WipBadge,
  Number,
  StackBadges,
  StackBadge,
  StyledFooter
};
