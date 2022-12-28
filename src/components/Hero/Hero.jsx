import React from 'react';
import PropTypes from 'prop-types';

import { cloudType as CLOUD_TYPE } from '@constants';

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
  TreeCracowThree,
  TreeCracowFour,
  TreeCracowFive,
  TreeCracowSix,
  TreeCracowSeven,
  TreeCracowEight,
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
      <StyledCloud cloudType={CLOUD_TYPE.one} />
      <StyledCloud cloudType={CLOUD_TYPE.two} />
      <StyledCloud cloudType={CLOUD_TYPE.three} />
      <StyledCloud cloudType={CLOUD_TYPE.four} />
      <StyledCloud cloudType={CLOUD_TYPE.five} />
      <StyledCloud cloudType={CLOUD_TYPE.six} />
      <StyledCloud cloudType={CLOUD_TYPE.seven} />
      <StyledCloud cloudType={CLOUD_TYPE.eight} />
      <StyledCloud cloudType={CLOUD_TYPE.nine} />
      <StyledCloud cloudType={CLOUD_TYPE.ten} />
      <StyledCloud cloudType={CLOUD_TYPE.eleven} />
      <StyledCloud cloudType={CLOUD_TYPE.twelve} />
      <StyledCloud cloudType={CLOUD_TYPE.thirteen} />
      <StyledCloud cloudType={CLOUD_TYPE.fourteen} />
      <StyledCloud cloudType={CLOUD_TYPE.fifteen} />
      <StyledCloud cloudType={CLOUD_TYPE.sixteen} />
      <StyledBirdOne />
      <StyledBirdTwo />
      <StyledRiver />
      <CracowWrapper>
        <StyledMountains />
        <TreeCracowOne color="green" isTaller />
        <TreeCracowTwo color="green" />
        <TreeCracowThree color="green" isTaller />
        <TreeCracowFour color="green" />
        <TreeCracowFive color="green" />
        <TreeCracowSix color="green" />
        <TreeCracowSeven color="green" />
        <TreeCracowEight color="green" />
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
