import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  MainTracks,
  MainTrainTracksBridge,
  MainTrainTracks,
  WideTracks,
  WideTrainTracksBridge,
  WideTrainTracks
} from './TrainTracks.styles.js';

const TrainTracks = (props) => (
  <Wrapper className={props.className}>
    <MainTracks>
      <MainTrainTracksBridge>
        <span /><span /><span />
      </MainTrainTracksBridge>
      <MainTrainTracks>
        <span /><span /><span />
      </MainTrainTracks>
    </MainTracks>
    <WideTracks>
      <WideTrainTracksBridge>
        <span /><span /><span /><span /><span /><span />
      </WideTrainTracksBridge>
      <WideTrainTracks>
        <span /><span /><span /><span /><span /><span /><span /><span />
      </WideTrainTracks>
    </WideTracks>
  </Wrapper>
);

TrainTracks.propTypes = {
  className: PropTypes.string
};

TrainTracks.defaultProps = {
  className: ''
};

export default TrainTracks;
