import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  StMarysBasilicaWrapper,
  MainWall,
  Roof,
  RoofTower,
  MainCross,
  LeftTower,
  LeftTowerUpper,
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
      </Roof>
      <LeftTower />
      <LeftTowerUpper />
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
