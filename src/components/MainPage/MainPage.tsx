import React from 'react';
import { useIntl } from 'react-intl';

import { NUMBER_BUTTON_TYPE, STACK_BADGE_TYPE } from 'constant';

import { breakpoints } from 'styles/basic';

import { IStats } from 'types/statsShape';
import { useMediaQuery } from 'hooks/useMediaQuery';

import Hero from 'components/Hero';
import Me from 'components/elements/Me';

import {
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
  ListWrapper,
  List,
  ListItem,
  Link,
  GmailIcon,
  LinkedinIcon,
  GithubIcon,
  StackOverflowIcon,
  MeAndCatWrapper,
  CatStyled,
  Number,
  StackBadges,
  StackBadge,
  StyledFooter
} from './MainPage.styles';

interface MainPageProps {
  stats?: IStats;
}

const MainPage = (props: MainPageProps) => {
  const intl = useIntl();

  const isWiderThanPortraitTablet = useMediaQuery(`(min-width: ${breakpoints.portraitTablet})`);

  return (
    <React.Fragment>
      <Hero />
      <StyledContainer>
        <StyledBox showTapes={!isWiderThanPortraitTablet}>
          <MainBox>
            <Heading>{intl.formatMessage({ id: 'mainPage.mainHeading' })}</Heading>
            <SubHeading>{intl.formatMessage({ id: 'mainPage.subHeading' })}</SubHeading>
            <SecondSubHeading>{intl.formatMessage({ id: 'mainPage.subHeading2' })}</SecondSubHeading>
          </MainBox>
          <ListWrapper>
            <Heading>{intl.formatMessage({ id: 'mainPage.seeMore' })}</Heading>
            <List>
              <ListItem>
                <Link href="https://fans4oneokrock.com" target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'mainPage.fans4oor' })}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://japanese.furdzik.com/" target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'mainPage.japaneseApp' })}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://dice.furdzik.com/" target="_blank" rel="noreferrer">
                  {intl.formatMessage({ id: 'mainPage.dice' })}
                </Link>
              </ListItem>
            </List>
          </ListWrapper>
          <MeAndCatWrapper>
            <Me />
            <CatStyled />
          </MeAndCatWrapper>
          <SocialIcons>
            <SocialItem>
              <SocialLink href="mailto:izabela.furdzik+portfolio@gmail.com" target="_blank" rel="noreferrer">
                <GmailIcon />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://www.linkedin.com/in/izabela-furdzik-4971315a/" target="_blank" rel="noreferrer">
                <LinkedinIcon />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://github.com/furdzik" target="_blank" rel="noreferrer">
                <GithubIcon />
              </SocialLink>
              {
                props.stats?.gitHub ? (
                  <AdditionalInfoBox>
                    <StatsWrapper>
                      <span>{intl.formatMessage({ id: 'mainPage.contributionsText' })}</span>
                      <Number type={NUMBER_BUTTON_TYPE.contributions}>
                        {props.stats?.gitHub?.totalContributions}
                      </Number>
                    </StatsWrapper>
                  </AdditionalInfoBox>
                ) : null
              }
            </SocialItem>
          </SocialIcons>
          <StyledFooter />
        </StyledBox>
      </StyledContainer>
    </React.Fragment>
  );
};

export default MainPage;
