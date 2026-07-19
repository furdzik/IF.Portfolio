import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import {
  Wrapper,
  Card,
  Header,
  SubHeader,
  Present
} from './BirthdayCard.styles.js';

const BirthdayCard = (props) => {
  const intl = useIntl();

  return (
    <Wrapper className={props.className}>
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

BirthdayCard.propTypes = {
  className: PropTypes.string
};

BirthdayCard.defaultProps = {
  className: ''
};

export default BirthdayCard;
