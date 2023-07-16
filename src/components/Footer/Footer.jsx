import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

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
      {
        intl.formatMessage(messages.copyright, {
          currentYear
        })
      }
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
