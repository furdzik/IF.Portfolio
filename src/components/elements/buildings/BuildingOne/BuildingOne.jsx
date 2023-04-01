import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Base,
  FirstFloor,
  FirstRoof,
  SecondFloor,
  SecondRoof,
  ThirdFloor,
  ThirdRoof,
  FourthFloor,
  FourthRoof,
  FifthFloor,
  FifthRoof,
  MainRoof,
  Wall,
  Roof,
  Door,
  OneWindow,
  SecondWindow,
  Balustrade
} from './BuildingOne.styles.js';

const BuildingOne = (props) => {
  // eslint-disable-next-line react/no-unstable-nested-components
  const RoofTemplate = () => (
    <Roof>
      <span /><span /><span /><span /><span />
    </Roof>
  );

  return (
    <Wrapper className={props.className}>
      <Base />
      <FirstFloor>
        <Wall>
          <Door />
          <OneWindow />
          <SecondWindow />
        </Wall>
      </FirstFloor>
      <FirstRoof>
        {RoofTemplate()}
      </FirstRoof>
      <SecondFloor>
        <Wall>
          <Door />
          <OneWindow />
          <SecondWindow />
          <Balustrade />
        </Wall>
      </SecondFloor>
      <SecondRoof>
        {RoofTemplate()}
      </SecondRoof>
      <ThirdFloor>
        <Wall>
          <Door />
          <OneWindow />
          <SecondWindow />
          <Balustrade />
        </Wall>
      </ThirdFloor>
      <ThirdRoof>
        {RoofTemplate()}
      </ThirdRoof>
      <FourthFloor>
        <Wall>
          <Door />
          <OneWindow />
          <SecondWindow />
          <Balustrade />
        </Wall>
      </FourthFloor>
      <FourthRoof>
        {RoofTemplate()}
      </FourthRoof>
      <FifthFloor>
        <Wall>
          <Door />
          <OneWindow />
          <SecondWindow />
          <Balustrade />
        </Wall>
      </FifthFloor>
      <FifthRoof>
        <MainRoof>
          <span /><span /><span /><span /><span />
          <span /><span /><span /><span /><span />
        </MainRoof>
      </FifthRoof>
    </Wrapper>
  );
};

BuildingOne.propTypes = {
  className: PropTypes.string
};

BuildingOne.defaultProps = {
  className: ''
};

export default BuildingOne;
