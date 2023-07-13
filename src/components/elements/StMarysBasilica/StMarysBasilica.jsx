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
  LeftTowerRoof,
  LeftTowerRoofBase,
  LeftTowerRoofMainTower,
  LeftTowerRoofSmallTowerColumnOne,
  LeftTowerRoofSmallTowerColumnTwo,
  LeftTowerRoofSmallTowerColumnThree,
  LeftTowerRoofSmallTowerColumnFour,
  LeftTower,
  LeftTowerBricklayLeft,
  LeftTowerBricklayRight,
  TurretLeft,
  TurretRight,
  LeftTowerUpper,
  LeftTowerUpperBricklayLeft,
  LeftTowerUpperBricklayRight,
  LeftTowerUpperCornice,
  RightTowerRoof,
  RightTowerRoofBase,
  RightTower,
  TowerCornice,
  LeftSideWall,
  RightSideWall
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
          <span /><span /><span />
        </MainCross>
        <RoofWindow />
      </Roof>
      <LeftTowerRoof>
        <LeftTowerRoofBase>
          <span /><span /><span />
        </LeftTowerRoofBase>
        <LeftTowerRoofSmallTowerColumnThree skew />
        <LeftTowerRoofSmallTowerColumnFour skew scalex />
        <LeftTowerRoofSmallTowerColumnOne />
        <LeftTowerRoofSmallTowerColumnTwo />
        <LeftTowerRoofMainTower>
          <span /><span /><span /><span /><span />
        </LeftTowerRoofMainTower>
      </LeftTowerRoof>
      <LeftTower>
        <LeftTowerBricklayLeft long={7} />
        <LeftTowerBricklayRight long={7} flip />
        <TurretLeft />
        <TurretRight />
        <TowerCornice top={22.5} />
        <TowerCornice top={45.1} />
        <TowerCornice top={69.6} />
        <TowerCornice top={94.3} />
        <TowerCornice top={119.3} />
        <TowerCornice top={142.3} longer />
      </LeftTower>
      <LeftTowerUpper>
        <LeftTowerUpperBricklayLeft long={30} />
        <LeftTowerUpperBricklayRight long={30} flip />
        <LeftTowerUpperCornice />
      </LeftTowerUpper>
      <RightTowerRoof>
        <RightTowerRoofBase>
          <span />
        </RightTowerRoofBase>
      </RightTowerRoof>
      <RightTower>
        <TowerCornice top={33.3} />
        <TowerCornice top={66.3} />
        <TowerCornice top={90.6} />
        <TowerCornice top={115.6} />
        <TowerCornice top={138.6} longer />
      </RightTower>
      <LeftSideWall>
        <span /><span /><span /><span />
      </LeftSideWall>
      <RightSideWall>
        <span /><span /><span /><span />
      </RightSideWall>
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
