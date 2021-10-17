import React from 'react';
import PropTypes from 'prop-types';

import { cloudType } from '../../config/constants';

import {
  Wrapper,
  ContainerStyled,
  StyledCloud,
  CracowWrapper,
  TokyoWrapper,
  MtFujiStyled,
  TreeGreenCracow,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  SkyTreeStyled
} from './Hero.styles.js';

const Hero = (props) => (
  <Wrapper className={props.className}>
    <ContainerStyled>
      <StyledCloud cloudType={cloudType.one} />
      <StyledCloud cloudType={cloudType.two} />
      <StyledCloud cloudType={cloudType.three} />
      <CracowWrapper>
        <TreeGreenCracow color="green" isTaller />
      </CracowWrapper>
      <TokyoWrapper>
        <MtFujiStyled />
        <TreePinkTokyoOne color="pink" />
        <TreePinkTokyoTwo color="pink" isTaller />
        <SkyTreeStyled />
      </TokyoWrapper>
    </ContainerStyled>
  </Wrapper>
);

Hero.propTypes = {
  className: PropTypes.string
};

Hero.defaultProps = {
  className: ''
};

export default Hero;
