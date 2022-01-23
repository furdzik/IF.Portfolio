import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { statsShape } from '@types/statsShape';

import MainPageComponent from '@components/MainPage';

import { getStats } from './MainPage.reducer';
import selector from './MainPage.selector';

const MainPage = (props) => {
  useEffect(() => {
    props.getStats();
  }, []);

  return (
    <MainPageComponent
      loading={props.loading}
      stats={props.stats}
    />
  );
};

MainPage.propTypes = {
  getStats: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  stats: statsShape.isRequired
};

MainPage.defaultProps = {
};

const mapDispatchToProps = {
  getStats
};

export default connect(selector, mapDispatchToProps)(MainPage);
