import React from 'react';
import PropTypes from 'prop-types';

import { cloudType } from '@constants';

import {
  Wrapper,
  ContainerStyled,
  StyledCloud,
  StyledBirds,
  CracowWrapper,
  TokyoWrapper,
  StyledMtFuji,
  StyledMountains,
  TreeGreenCracowOne,
  TreeGreenCracowTwo,
  TreeGreenCracowThree,
  TreeGreenCracowFour,
  TreeGreenCracowFive,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  TreePinkTokyoThree,
  TreePinkTokyoFour,
  StyledSkyTree
} from './Hero.styles.js';

const Hero = (props) => (
  <Wrapper className={props.className}>
    <ContainerStyled>
      <StyledCloud cloudType={cloudType.one} />
      <StyledCloud cloudType={cloudType.two} />
      <StyledCloud cloudType={cloudType.three} />
      <StyledCloud cloudType={cloudType.four} />
      <StyledCloud cloudType={cloudType.five} />
      <StyledCloud cloudType={cloudType.six} />
      <StyledCloud cloudType={cloudType.seven} />
      <StyledCloud cloudType={cloudType.eight} />
      <StyledCloud cloudType={cloudType.nine} />
      <StyledCloud cloudType={cloudType.ten} />
      <StyledCloud cloudType={cloudType.eleven} />
      <StyledCloud cloudType={cloudType.twelve} />
      <StyledCloud cloudType={cloudType.thirteen} />
      <StyledCloud cloudType={cloudType.fourteen} />
      <StyledCloud cloudType={cloudType.fifteen} />
      <StyledCloud cloudType={cloudType.sixteen} />
      <StyledBirds />
      <CracowWrapper>
        <StyledMountains />
        <TreeGreenCracowOne color="green" isTaller />
        <TreeGreenCracowTwo color="green" />
        <TreeGreenCracowThree color="green" isTaller />
        <TreeGreenCracowFour color="green" />
        <TreeGreenCracowFive color="green" />
      </CracowWrapper>
      <TokyoWrapper>
        <StyledMtFuji />
        <TreePinkTokyoOne color="pink" />
        <TreePinkTokyoTwo color="pink" isTaller />
        <TreePinkTokyoThree color="pink" />
        <TreePinkTokyoFour color="pink" />
        <StyledSkyTree />
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
