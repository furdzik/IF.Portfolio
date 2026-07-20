import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import { NUMBER_BUTTON_TYPE } from 'constant';

import { breakpoints } from 'styles/basic';

import Box from 'components/Box';
import Container from 'components/Container';
import Footer from 'components/Footer';

import Cat from 'components/elements/Cat';

const Heading = styled.h1`
  width: 100%;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.violet};
`;

const SubHeading = styled.h2`
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
  color: ${(props) => props.theme.monoColors.black};
  white-space: pre-line;
`;

const SecondSubHeading = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
  color: ${(props) => props.theme.color.violet};
  white-space: pre-line;
`;

const StyledContainer = styled(Container)`
  position: absolute;
  right: 1rem;
  bottom: 4%;
  left: 1rem;
  z-index: 6;

  @media (min-width: ${breakpoints.portraitTablet}) {
   width: auto;
  }

  @media (min-width: ${breakpoints.laptop}) {
    bottom: 4%;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => props.theme.layout.width};
    max-width: ${(props) => props.theme.layout.width};
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background: linear-gradient(#ffffff 67%, rgb(255 255 255 / 88%));
`;

const MainBox = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.portraitTablet}) {
    order: 1;
    width: auto;
  }
`;

const SocialIcons = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  font-family: ${(props) => props.theme.fontFamily.roboto};

  @media (min-width: ${breakpoints.portraitTablet}) {
    order: 3;
    margin-top: -1rem;
    margin-bottom: -3rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    order: 4;
  }
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

const socialIconStyles = css`
  width: 3rem;
  height: 3rem;
  &:hover {
    opacity: .8;
  }
`;

const GmailIcon = styled(SiGmail)`
  ${socialIconStyles};
  color: #eb4336;
`;

const LinkedinIcon = styled(FaLinkedin)`
  ${socialIconStyles};
  color: #0a66c2;
`;

const GithubIcon = styled(FaGithub)`
  ${socialIconStyles};
  color: #1b1f23;
`;

const StackOverflowIcon = styled(FaStackOverflow)`
  ${socialIconStyles};
  color: #f48225;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  order: 2;
  width: 100%;
  margin-bottom: 4rem;

  @media (min-width: ${breakpoints.landscapeTablet}) {
    order: 2;
    width: 32%;
    margin-top: 0;
    margin-left: 2rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    flex-direction: row;
    order: 2;
    margin-left: 6rem;
  }
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
  position: absolute;
  right: 4rem;
  bottom: 4rem;
  order: 2;

  @media (min-width: ${breakpoints.landscapeTablet}) {
    margin-left: auto;
  }

  @media (min-width: ${breakpoints.laptop}) {
    order: 3;
    margin-left: 4rem;
  }
`;

const CatStyled = styled(Cat)`
  position: absolute;
  bottom: 0;
  left: -6rem;
`;

const Number = styled.span<{ type?: string }>`
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

const StyledFooter = styled(Footer)`
  position: absolute;
  right: -5.5rem;
  bottom: 7rem;
  transform: rotate(-90deg);
  transform-origin: center;
  font-size: .9rem;
  color: #646464;
`;

export {
  Heading,
  SubHeading,
  SecondSubHeading,
  StyledContainer,
  StyledBox,
  MainBox,
  SocialIcons,
  SocialItem,
  SocialLink,
  AdditionalInfoBox,
  StatsWrapper,
  GmailIcon,
  LinkedinIcon,
  GithubIcon,
  StackOverflowIcon,
  ListWrapper,
  List,
  ListItem,
  Link,
  MeAndCatWrapper,
  CatStyled,
  Number,
  StackBadges,
  StyledFooter
};
