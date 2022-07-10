import React from 'react';
import PropTypes from 'prop-types';

import { cloudType } from '@constants';

import {
  Wrapper,
  ContainerStyled,
  StyledCloud,
  StyledBirdOne,
  StyledBirdTwo,
  StyledRiver,
  CracowWrapper,
  TokyoWrapper,
  StyledMtFuji,
  StyledCityGround,
  StyledMountains,
  TreeGreenCracowOne,
  TreeGreenCracowTwo,
  TreeGreenCracowThree,
  TreeGreenCracowFour,
  TreeGreenCracowFive,
  TreeGreenCracowSix,
  TreeGreenCracowSeven,
  TreeGreenCracowEight,
  TreePinkTokyoOne,
  TreePinkTokyoTwo,
  TreePinkTokyoThree,
  TreePinkTokyoFour,
  TreePinkTokyoFive,
  TreePinkTokyoSix,
  TreePinkTokyoSeven,
  TreePinkTokyoEight,
  TreePinkTokyoNine,
  TreePinkTokyoTen,
  TreePinkTokyoEleven,
  StyledSkyTree,
  StyledStMarysBasilica,
  StyledTrainTracks,
  StyledBuildingOne,
  StyledBuildingTwo,
  StyledBuildingThree,
  StyledBuildingFour,
  StyledBuildingFive
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
      <StyledBirdOne />
      <StyledBirdTwo />
      <StyledRiver />
      <CracowWrapper>
        <StyledMountains />
        <TreeGreenCracowOne color="green" isTaller />
        <TreeGreenCracowTwo color="green" />
        <TreeGreenCracowThree color="green" isTaller />
        <TreeGreenCracowFour color="green" />
        <TreeGreenCracowFive color="green" />
        <TreeGreenCracowSix color="green" />
        <TreeGreenCracowSeven color="green" />
        <TreeGreenCracowEight color="green" />
        <StyledStMarysBasilica />
      </CracowWrapper>
      <TokyoWrapper>
        <StyledMtFuji />
        <StyledCityGround />
        <TreePinkTokyoOne color="pink" />
        <TreePinkTokyoTwo color="pink" isTaller />
        <TreePinkTokyoThree color="pink" />
        <TreePinkTokyoFour color="pink" />
        <TreePinkTokyoEight color="pink" isTaller />
        <TreePinkTokyoSeven color="green" isTaller />
        <TreePinkTokyoSix color="green" />
        <TreePinkTokyoFive color="green" isTaller />
        <TreePinkTokyoNine color="green" />
        <TreePinkTokyoTen color="pink" />
        <TreePinkTokyoEleven color="pink" isTaller />
        <StyledSkyTree />
        <StyledTrainTracks />
        <StyledBuildingOne />
        <StyledBuildingTwo />
        <StyledBuildingThree />
        <StyledBuildingFour />
        <StyledBuildingFive />
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
