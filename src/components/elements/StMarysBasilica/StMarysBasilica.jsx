import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StMarysBasilicaWrapper,
  MainWall,
  Roof,
  RoofTower,
  MainCross,
  RoofWindow,
  LeftTower,
  LeftTowerBricklayLeft,
  LeftTowerBricklayRight,
  TurretLeft,
  TurretRight,
  LeftTowerUpper,
  LeftTowerUpperBricklayLeft,
  LeftTowerUpperBricklayRight,
  LeftTowerUpperCornice,
  RightTower
} from './StMarysBasilica.styles.js';

const StMarysBasilica = (props) => (
  <Wrapper
    className={props.className}
  >
    <StMarysBasilicaWrapper>
      <MainWall />
      <Roof>
        <RoofTower />
        <MainCross>
          <span />
          <span />
          <span />
        </MainCross>
        <RoofWindow />
      </Roof>
      <LeftTower>
        <LeftTowerBricklayLeft long={7} />
        <LeftTowerBricklayRight long={7} flip />
        <TurretLeft />
        <TurretRight />
      </LeftTower>
      <LeftTowerUpper>
        <LeftTowerUpperBricklayLeft long={30} />
        <LeftTowerUpperBricklayRight long={30} flip />
        <LeftTowerUpperCornice />
      </LeftTowerUpper>
      <RightTower />
    </StMarysBasilicaWrapper>
  </Wrapper>
);

StMarysBasilica.propTypes = {
  className: PropTypes.string
};

StMarysBasilica.defaultProps = {
  className: ''
};

export default StMarysBasilica;
