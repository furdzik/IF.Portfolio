import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IStats } from 'types/statsShape';

import MainPageComponent from 'components/MainPage';

import { getStats } from './MainPage.reducer';
import selector from './MainPage.selector';

interface MainPageProps {
  getStats: () => void;
  stats: IStats;
}

const MainPage = (props: MainPageProps) => {
  useEffect(() => {
    props.getStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainPageComponent
      stats={props.stats}
    />
  );
};

const mapDispatchToProps = {
  getStats
};

export default connect(selector, mapDispatchToProps)(MainPage);
