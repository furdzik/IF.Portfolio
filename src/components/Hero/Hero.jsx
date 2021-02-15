import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  ContainerStyled,
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
