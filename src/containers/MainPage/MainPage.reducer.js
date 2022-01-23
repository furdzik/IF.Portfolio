import { fetchStackOverflowStats, fetchGitHubStats } from '@api';

const actionTypes = {
  GET_STATS_INIT: 'MAIN_PAGE/GET_STATS_INIT',
  GET_STATS: 'MAIN_PAGE/GET_STATS'
};

const initialState = {
  loading: true,
  stats: {}
};

export default function mainPageReducer (state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_STATS: {
      const { stackOverflow, gitHub } = action.payload;

      return {
        ...state,
        loading: false,
        stats: {
          gitHub: {
            totalContributions: gitHub?.contributionCalendar?.totalContributions
          },
          stackOverflow: {
            reputation: stackOverflow?.reputation,
            badgeCounts: stackOverflow?.badge_counts
              ? { ...stackOverflow?.badge_counts }
              : null
          }
        }
      };
    }

    case actionTypes.GET_STATS_INIT: {
      return {
        ...state,
        loading: true
      };
    }

    default:
      return state;
  }
}

const getStatsInitAction = () => ({
  type: actionTypes.GET_STATS_INIT
});

const getStatsAction = (payload) => ({
  type: actionTypes.GET_STATS,
  payload
});

export const getStats = () => (dispatch) => {
  dispatch(getStatsInitAction());

  Promise.all(
    [
      fetchGitHubStats(),
      fetchStackOverflowStats()
    ]
  )
    .then(([gitHubResponse, stackOverflowResponse]) => {
      dispatch(getStatsAction({
        gitHub: gitHubResponse?.data?.user?.contributionsCollection,
        stackOverflow: stackOverflowResponse.items[0]
      }));
    })
    .catch(() => {
      // @TODO: add errors msg
    });
};
