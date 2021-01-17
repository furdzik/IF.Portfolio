import React from 'react';
import { useIntl } from 'react-intl';

import Container from '../Container';
import Header from '../Header';

import messages from './MainPage.messages';

const MainPage = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Header />
      <Container>
        {intl.formatMessage(messages.hello)}
      </Container>
    </React.Fragment>
  );
};

MainPage.propTypes = {
};

MainPage.defaultProps = {
};

export default MainPage;
