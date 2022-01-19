import React from 'react';
import { useIntl } from 'react-intl';

import {
  mdiGmail,
  mdiGithub,
  mdiLinkedin,
  mdiStackOverflow
} from '@mdi/js';

import Container from '@components/Container';
import Hero from '@components/Hero';
import Footer from '@components/Footer';

import Me from '@components/elements/Me';

import {
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
} from './MainPage.styles';
import messages from './MainPage.messages';

const MainPage = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Hero />
      <Container>
        <BoxStyled>
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
              <SocialLink href="https://github.com/furdzik" target="_blank" rel="noreferrer">
                <IconStyled
                  path={mdiGithub}
                />
              </SocialLink>
              tu cos będzie
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://stackoverflow.com/users/7615658/izabela-furdzik" target="_blank" rel="noreferrer">
                <IconStyled
                  path={mdiStackOverflow}
                />
              </SocialLink>
              i tu
            </SocialItem>
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
          </SocialIcons>
        </BoxStyled>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
