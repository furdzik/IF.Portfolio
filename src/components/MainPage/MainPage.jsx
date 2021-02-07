import React from 'react';
import { useIntl } from 'react-intl';

import Container from '../Container';
import Header from '../Header';
import Hero from '../Hero';
import Box from '../Box';

import {
  Heading,
  SubHeading
} from './MainPage.styles';
import messages from './MainPage.messages';

const MainPage = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Container>
        <Box>
          <Heading>{intl.formatMessage(messages.mainHeading)}</Heading>
          <SubHeading>{intl.formatMessage(messages.subHeading)}</SubHeading>
        </Box>
      </Container>
    </React.Fragment>
  );
};

MainPage.propTypes = {
};

MainPage.defaultProps = {
};

export default MainPage;
