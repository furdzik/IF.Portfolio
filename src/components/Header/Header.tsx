import React from 'react';
import { useIntl } from 'react-intl';

import Container from 'components/Container';

import {
  Wrapper,
  Title
} from './Header.styles';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const intl = useIntl();

  return (
    <Wrapper
      className={className}
    >
      <Container>
        <Title>
          {intl.formatMessage({ id: 'header.title' })}
        </Title>
      </Container>
    </Wrapper>
  );
};

export default Header;
