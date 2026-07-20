import React from 'react';
// import { v4 as uuidv4 } from "uuid";

import {
  SemicircularWindowWrapper
} from './SemicircularWindow.styles';

interface SemicircularWindowProps {
  className?: string;
}

const SemicircularWindow = ({ className = '' }: SemicircularWindowProps) => (
  <SemicircularWindowWrapper
    className={className}
  >
    Empty
  </SemicircularWindowWrapper>
);

export default SemicircularWindow;
