import React from 'react';
import { useIntl } from 'react-intl';

import {
  mdiGmail,
  mdiGithub,
  mdiLinkedin,
  mdiStackOverflow
} from '@mdi/js';

import { NUMBER_BUTTON_TYPE, STACK_BADGE_TYPE } from '@constants';

import { statsShape } from '@types/statsShape';

import Hero from '@components/Hero';
import Footer from '@components/Footer';

import Me from '@components/elements/Me';

import {
  Heading,
  SubHeading,
  StyledContainer,
  StyledBox,
  MainBox,
  SocialIcons,
  SocialItem,
  SocialLink,
  AdditionalInfoBox,
  ListWrapper,
  List,
  ListItem,
  Link,
  IconStyled,
  MeAndCatWrapper,
  CatStyled,
  WipBadge,
  Number,
  StackBadges,
  StackBadge,
  StyledFooter
} from './MainPage.styles';
import messages from './MainPage.messages';

const MainPage = (props) => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Hero />
      <StyledContainer>
        <StyledBox>
          <MainBox>
            <Heading>{intl.formatMessage(messages.mainHeading)}</Heading>
            <SubHeading>{intl.formatMessage(messages.subHeading)}</SubHeading>
          </MainBox>
          <ListWrapper>
            <Heading>{intl.formatMessage(messages.seeMore)}</Heading>
            <List>
              <ListItem>
                <Link href="https://japanese.furdzik.com/" target="_blank" rel="noreferrer">
                  {intl.formatMessage(messages.japaneseApp)}
                </Link>
              </ListItem>
              <ListItem>
                <Link href="http://cssart.furdzik.com/" target="_blank" rel="noreferrer">
                  {intl.formatMessage(messages.cssArt)}
                  <WipBadge />
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/furdzik/IF.StyleGuide/blob/main/README.md" target="_blank" rel="noreferrer">
                  {intl.formatMessage(messages.styleGuide)}
                  <WipBadge />
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
                <IconStyled
                  path={mdiGmail}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://www.linkedin.com/in/izabela-furdzik-4971315a/" target="_blank" rel="noreferrer">
                <IconStyled
                  path={mdiLinkedin}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://github.com/furdzik" target="_blank" rel="noreferrer">
                <IconStyled
                  path={mdiGithub}
                />
              </SocialLink>
              {
                props.stats?.gitHub ? (
                  <AdditionalInfoBox>
                    <div>
                      {intl.formatMessage(messages.contributionsText)}
                      <Number type={NUMBER_BUTTON_TYPE.contributions}>
                        {props.stats?.gitHub?.totalContributions}
                      </Number>
                    </div>
                  </AdditionalInfoBox>
                ) : null
              }
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://stackoverflow.com/users/7615658/izabela-furdzik" target="_blank" rel="noreferrer">
                <IconStyled
                  path={mdiStackOverflow}
                />
              </SocialLink>
              {
                props.stats?.stackOverflow ? (
                  <AdditionalInfoBox>
                    <div>
                      {intl.formatMessage(messages.reputationText)}
                      <Number type={NUMBER_BUTTON_TYPE.reputation}>
                        {props.stats?.stackOverflow?.reputation}
                      </Number>
                    </div>
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
