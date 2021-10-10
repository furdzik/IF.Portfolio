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
import messages from './BirthdayCard.messages';

const BirthdayCard = (props) => {
  const intl = useIntl();

  return (
    <Wrapper className={props.className}>
      <Card>
        <Header>
          {intl.formatMessage(messages.header)}
        </Header>
        <SubHeader>{intl.formatMessage(messages.name)}</SubHeader>
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
