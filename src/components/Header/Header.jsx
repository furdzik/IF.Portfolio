import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import Container from '@components/Container';

import {
  Wrapper,
  Title
} from './Header.styles.js';

const Header = (props) => {
  const intl = useIntl();

  return (
    <Wrapper
      className={props.className}
    >
      <Container>
        <Title>
          {intl.formatMessage({ id: 'header.title' })}
        </Title>
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export default Header;
