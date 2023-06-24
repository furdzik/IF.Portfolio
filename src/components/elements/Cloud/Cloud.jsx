import React from 'react';
import PropTypes from 'prop-types';

import { cloudType } from '@constants';

import {
  Wrapper
} from './Cloud.styles.js';

const Cloud = (props) => (
  <Wrapper
    className={props.className}
    cloudType={props.cloudType}
    cloudSize={props.cloudSize}
  >
    <span />
    <span />
    <span />
    <span />
  </Wrapper>
);

Cloud.propTypes = {
  className: PropTypes.string,
  cloudSize: PropTypes.oneOf(['small', 'medium', 'big']),
  cloudType: PropTypes.oneOf([
    cloudType.one,
    cloudType.two,
    cloudType.three,
    cloudType.four,
    cloudType.five,
    cloudType.six,
    cloudType.seven,
    cloudType.eight,
    cloudType.nine,
    cloudType.ten,
    cloudType.eleven,
    cloudType.twelve
  ])
};

Cloud.defaultProps = {
  className: '',
  cloudSize: 'medium',
  cloudType: cloudType.one
};

export default Cloud;
