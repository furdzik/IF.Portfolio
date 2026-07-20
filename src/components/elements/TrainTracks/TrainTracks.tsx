import React from 'react';

import {
  Wrapper,
  MainTracks,
  MainTrainTracksBridge,
  MainTrainTracks,
  WideTracks,
  WideTrainTracksBridge,
  WideTrainTracks
} from './TrainTracks.styles';

interface TrainTracksProps {
  className?: string;
}

const TrainTracks = ({ className = '' }: TrainTracksProps) => (
  <Wrapper className={className}>
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

export default TrainTracks;
