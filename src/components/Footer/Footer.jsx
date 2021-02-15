import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Container from '../Container';

import {
  Wrapper
} from './Footer.styles.js';
import messages from './Footer.messages';

const Footer = (props) => {
  const intl = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper
      className={props.className}
    >
      <Container>
        {intl.formatMessage(messages.copyright, {
          currentYear
        })}
      </Container>
    </Wrapper>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: ''
};

export default Footer;
