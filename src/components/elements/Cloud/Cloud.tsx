import React from 'react';

import { cloudType } from 'constant';

import {
  Wrapper
} from './Cloud.styles';

export interface CloudProps {
  className?: string;
  cloudSize?: 'small' | 'medium' | 'big';
  cloudType?: string;
}

const Cloud = ({ className = '', cloudSize = 'medium', cloudType: cloudTypeProp = cloudType.one }: CloudProps) => (
  <Wrapper
    className={className}
    cloudType={cloudTypeProp}
    cloudSize={cloudSize}
  >
    <span />
    <span />
    <span />
    <span />
  </Wrapper>
);

export default Cloud;
