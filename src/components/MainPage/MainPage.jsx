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

import {
  Heading,
  SubHeading,
  BoxStyled,
  SocialIcons,
  SocialItem,
  SocialLink,
  ButtonsWrapper,
  ButtonStyled,
  IconStyled,
  MeStyled
} from './MainPage.styles';
import messages from './MainPage.messages';

const MainPage = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Container>
        <BoxStyled>
          <div>
            <Heading>{intl.formatMessage(messages.mainHeading)}</Heading>
            <SubHeading>{intl.formatMessage(messages.subHeading)}</SubHeading>
          </div>
          <ButtonsWrapper>
            <Heading>{intl.formatMessage(messages.seeMore)}</Heading>
            <ButtonStyled href="http://cssart.furdzik.com/" target="_blank">CSS Art</ButtonStyled>
            <ButtonStyled href="http://japanese.furdzik.com/" target="_blank">Japanese App</ButtonStyled>
          </ButtonsWrapper>
          <MeStyled />
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
    </React.Fragment>
  );
};

export default MainPage;
