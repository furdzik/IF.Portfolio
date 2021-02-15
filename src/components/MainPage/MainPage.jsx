import React from 'react';
import { useIntl } from 'react-intl';

import {
  mdiGmail,
  mdiGithub,
  mdiLinkedin,
  mdiFacebook
} from '@mdi/js';

import Container from '../Container';
import Header from '../Header';
import Hero from '../Hero';
import Footer from '../Footer';
import Me from '../elements/Me';

import {
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
} from './MainPage.styles';
import messages from './MainPage.messages';

const MainPage = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Hero />
      <Header />
      <Container>
        <BoxStyled>
          <MainBox>
            <Heading>{intl.formatMessage(messages.mainHeading)}</Heading>
            <SubHeading>{intl.formatMessage(messages.subHeading)}</SubHeading>
          </MainBox>
          <ButtonsWrapper>
            <Heading>{intl.formatMessage(messages.seeMore)}</Heading>
            <ButtonStyled href="http://cssart.furdzik.com/" target="_blank">CSS Art</ButtonStyled>
            <ButtonStyled href="http://japanese.furdzik.com/" target="_blank">Japanese App</ButtonStyled>
          </ButtonsWrapper>
          <MeAndCatWrapper>
            <Me />
            <CatStyled />
          </MeAndCatWrapper>
          <SocialIcons>
            <SocialItem>
              <SocialLink href="mailto:izabela.furdzik+portfolio@gmail.com" target="_blank">
                <IconStyled
                  path={mdiGmail}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://github.com/furdzik" target="_blank">
                <IconStyled
                  path={mdiGithub}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://www.linkedin.com/in/izabela-furdzik-4971315a/" target="_blank">
                <IconStyled
                  path={mdiLinkedin}
                />
              </SocialLink>
            </SocialItem>
            <SocialItem>
              <SocialLink href="https://www.facebook.com/izabela.furdzik" target="_blank">
                <IconStyled
                  path={mdiFacebook}
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
