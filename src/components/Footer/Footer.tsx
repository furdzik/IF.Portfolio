import React from 'react';
import { useIntl } from 'react-intl';

import { Wrapper } from './Footer.styles';

export interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const intl = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper className={className}>
      {
        intl.formatMessage({ id: 'footer.copyright' }, {
          currentYear
        })
      }
    </Wrapper>
  );
};

export default Footer;
