import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { statsShape } from '@types/statsShape';

import { getStats } from './MainPage.reducer';
import selector from './MainPage.selector';

import MainPageComponent from '@components/MainPage';

const MainPage = (props) => {
  useEffect(() => {
    props.getStats();
  }, []);

  return !props.loading ? (
      <MainPageComponent stats={props.stats} />
  ) : 'Loading'; // @TODO: add Loader from my own components library
};

MainPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  getStats: PropTypes.func.isRequired,
  stats: statsShape.isRequired
};

MainPage.defaultProps = {
};

const mapDispatchToProps = {
  getStats
};

export default connect(selector, mapDispatchToProps)(MainPage);
