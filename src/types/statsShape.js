import PropTypes from 'prop-types';

export const statsShape = PropTypes.shape({
  gitHub: PropTypes.shape({
    totalContributions: PropTypes.number
  }),
  stackOverflow: PropTypes.shape({
    badgeCounts: PropTypes.shape({
      bronze: PropTypes.number,
      gold: PropTypes.number,
      silver: PropTypes.number
    }),
    reputation: PropTypes.number
  })
});
