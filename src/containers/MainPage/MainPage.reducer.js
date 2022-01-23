const actionTypes = {
  GET_STATS_INIT: 'MAIN_PAGE/GET_STATS_INIT',
  GET_STATS: 'MAIN_PAGE/GET_STATS'
};

const initialState = {
  loading: true
};

export default function mainPageReducer (state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_STATS_INIT: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}

const getStatsInitAction = (payload) => ({
  type: actionTypes.GET_STATS_INIT,
  payload
});

const getStatsAction = (payload) => ({
  type: actionTypes.GET_STATS,
  payload
});

export const getStats = () => (dispatch) => {
  dispatch(getStatsInitAction());
  dispatch(getStatsAction());
};
