import React from 'react';
import { useIntl } from 'react-intl';

import {
  Wrapper,
  Card,
  Header,
  SubHeader,
  Present
} from './BirthdayCard.styles';

interface BirthdayCardProps {
  className?: string;
}

const BirthdayCard = ({ className = '' }: BirthdayCardProps) => {
  const intl = useIntl();

  return (
    <Wrapper className={className}>
      <Card>
        <Header>
          {intl.formatMessage({ id: 'birthdayCard.header' })}
        </Header>
        <SubHeader>{intl.formatMessage({ id: 'birthdayCard.name' })}</SubHeader>
        <Present />
      </Card>
    </Wrapper>
  );
};

export default BirthdayCard;
