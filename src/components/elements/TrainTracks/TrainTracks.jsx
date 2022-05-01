import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  MainTrainTracksBridge,
  MainTrainTracks
} from './TrainTracks.styles.js';

const TrainTracks = (props) => (
  <Wrapper
    className={props.className}
  >
    <MainTrainTracksBridge>
      <span /><span /><span />
    </MainTrainTracksBridge>
    <MainTrainTracks>
      <span /><span /><span /><span /><span /><span /><span /><span />
    </MainTrainTracks>
  </Wrapper>
);

TrainTracks.propTypes = {
  className: PropTypes.string
};

TrainTracks.defaultProps = {
  className: ''
};

export default TrainTracks;
