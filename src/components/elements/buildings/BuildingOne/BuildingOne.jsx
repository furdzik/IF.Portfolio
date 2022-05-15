import React from 'react';
import PropTypes from 'prop-types';

// import Building from '@components/elements/buildings/Building';

import {
  Wrapper
} from './BuildingOne.styles.js';

const BuildingOne = (props) => (
  <Wrapper className={props.className}>
    {/*<Building*/}
    {/*  width={10}*/}
    {/*  height={10}*/}
    {/*  leftRightSideColor="red"*/}
    {/*  topBottomSideColor="red"*/}
    {/*  frontBackSideColor="red"*/}
    {/*/>*/}
  </Wrapper>
);

BuildingOne.propTypes = {
  className: PropTypes.string
};

BuildingOne.defaultProps = {
  className: ''
};

export default BuildingOne;
