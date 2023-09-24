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
  TreeCracowOne,
  TreeCracowTwo,
  // TreeCracowThree,
  TreeCracowFour,
  TreeCracowFive,
  TreeCracowSix,
  TreeCracowSeven,
  // TreeCracowEight,
  TreeTokyoOne,
  TreeTokyoTwo,
  TreeTokyoThree,
  TreeTokyoFour,
  TreeTokyoFive,
  TreeTokyoSix,
  TreeTokyoSeven,
  TreeTokyoEight,
  TreeTokyoNine,
  TreeTokyoTen,
  TreeTokyoEleven,
  TreeTokyoTwelve,
  TreeTokyoThirteen,
  TreeTokyoFourteen,
  TreeTokyoFifteen,
  TreeTokyoSixteen,
  TreeTokyoSeventeen,
  TreeTokyoEighteen,
  TreeTokyoNineteen,
  StyledSkyTree,
  StyledStMarysBasilica,
  StyledTrainTracks,
  StyledBuildingOne,
  StyledBuildingTwo,
  StyledBuildingThree,
  StyledBuildingFour,
  StyledBuildingFive,
  StyledBuildingSix,
  StyledBuildingSeven,
  StyledBuildingEight,
  StyledBuildingNine,
  StyledBuildingTen,
  StyledBuildingEleven,
  StyledBuildingTwelve,
  StyledBuildingThirteen,
  StyledBuildingFourteen
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
        <TreeCracowOne color="green" isTaller />
        <TreeCracowTwo color="green" isTaller />
        {/* <TreeCracowThree color="green" isTaller /> */}
        <TreeCracowFour color="green" />
        <TreeCracowFive color="green" />
        <TreeCracowSix color="green" />
        <TreeCracowSeven color="green" />
        {/* <TreeCracowEight color="green" /> */}
        <StyledStMarysBasilica />
      </CracowWrapper>
      <TokyoWrapper>
        <StyledMtFuji />
        <StyledCityGround />
        <TreeTokyoOne color="pink" />
        <TreeTokyoTwo color="pink" isTaller />
        <TreeTokyoThree color="pink" />
        <TreeTokyoFour color="pink" />
        <TreeTokyoEight color="pink" isTaller />
        <TreeTokyoSeven color="green" isTaller />
        <TreeTokyoSix color="green" />
        <TreeTokyoFive color="green" isTaller />
        <TreeTokyoNine color="green" />
        <TreeTokyoTen color="pink" />
        <TreeTokyoEleven color="pink" isTaller />
        <TreeTokyoTwelve color="pink" isTaller />
        <TreeTokyoThirteen color="green" />
        <TreeTokyoFourteen color="green" />
        <TreeTokyoFifteen color="green" isTaller />
        <TreeTokyoSixteen color="pink" />
        <TreeTokyoSeventeen color="green" inTaller />
        <TreeTokyoEighteen color="pink" inTaller />
        <TreeTokyoNineteen color="green" />
        <StyledSkyTree />
        <StyledTrainTracks />
        <StyledBuildingOne />
        <StyledBuildingTwo />
        <StyledBuildingThree />
        <StyledBuildingFour />
        <StyledBuildingFive />
        <StyledBuildingSix />
        <StyledBuildingSeven />
        <StyledBuildingEight />
        <StyledBuildingNine />
        <StyledBuildingTen />
        <StyledBuildingEleven />
        <StyledBuildingTwelve />
        <StyledBuildingThirteen />
        <StyledBuildingFourteen />
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
