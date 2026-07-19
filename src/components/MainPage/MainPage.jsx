import React from 'react';
import { useIntl } from 'react-intl';

import { NUMBER_BUTTON_TYPE, STACK_BADGE_TYPE } from '@constants';

import { breakpoints } from '@styles/basic';

import { statsShape } from '@types/statsShape';
import { useMediaQuery } from '@hooks/useMediaQuery';

import Hero from '@components/Hero';
import Me from '@components/elements/Me';

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
import messages from './MainPage.messages';

const MainPage = (props) => {
  const intl = useIntl();

  const isWiderThanPortraitTablet = useMediaQuery(`(min-width: ${breakpoints.portraitTablet})`);

  return (
    <React.Fragment>
      <Hero />
      <StyledContainer>
        <StyledBox showTapes={!isWiderThanPortraitTablet}>
          <MainBox>
            <Heading>{intl.formatMessage(messages.mainHeading)}</Heading>
            <SubHeading>{intl.formatMessage(messages.subHeading)}</SubHeading>
            <SecondSubHeading>{intl.formatMessage(messages.subHeading2)}</SecondSubHeading>
          </MainBox>
          <ListWrapper>
            <Heading>{intl.formatMessage(messages.seeMore)}</Heading>
            <List>
              <ListItem>
                <Link href="https://fans4oneokrock.com" target="_blank" rel="noreferrer">
                  {intl.formatMessage(messages.fans4oor)}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://japanese.furdzik.com/" target="_blank" rel="noreferrer">
                  {intl.formatMessage(messages.japaneseApp)}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://dice.furdzik.com/" target="_blank" rel="noreferrer">
                  {intl.formatMessage(messages.dice)}
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
                      <span>{intl.formatMessage(messages.contributionsText)}</span>
                      <Number type={NUMBER_BUTTON_TYPE.contributions}>
                        {props.stats?.gitHub?.totalContributions}
                      </Number>
                    </StatsWrapper>
                  </AdditionalInfoBox>
                ) : null
              }
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://stackoverflow.com/users/7615658/izabela-furdzik" target="_blank" rel="noreferrer">
                <StackOverflowIcon />
              </SocialLink>
              {
                props.stats?.stackOverflow ? (
                  <AdditionalInfoBox>
                    <StatsWrapper>
                      <span>{intl.formatMessage(messages.reputationText)}</span>
                      <Number type={NUMBER_BUTTON_TYPE.reputation}>
                        {props.stats?.stackOverflow?.reputation}
                      </Number>
                    </StatsWrapper>
                    {
                      props.stats?.stackOverflow?.badgeCounts ? (
                        <StackBadges>
                          {
                            props.stats?.stackOverflow?.badgeCounts?.gold ? (
                              <StackBadge type={STACK_BADGE_TYPE.gold}>
                                {props.stats?.stackOverflow?.badgeCounts?.gold}
                              </StackBadge>
                            ) : null
                          }
                          {
                            props.stats?.stackOverflow?.badgeCounts?.silver ? (
                              <StackBadge type={STACK_BADGE_TYPE.silver}>
                                {props.stats?.stackOverflow?.badgeCounts?.silver}
                              </StackBadge>
                            ) : null
                          }
                          {
                            props.stats?.stackOverflow?.badgeCounts?.bronze ? (
                              <StackBadge type={STACK_BADGE_TYPE.bronze}>
                                {props.stats?.stackOverflow?.badgeCounts?.bronze}
                              </StackBadge>
                            ) : null
                          }
                        </StackBadges>
                      ) : null
                    }
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

MainPage.propTypes = {
  stats: statsShape.isRequired
};

export default MainPage;
