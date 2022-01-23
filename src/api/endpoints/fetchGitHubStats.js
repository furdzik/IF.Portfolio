import { githubUser, githubKey } from '@config/environment';
import api from '@config/api';

const body = {
  query: `{
    user(login: "${githubUser}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
        }
        contributionYears
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        totalRepositoryContributions
      }
    }
  }`
};

export const fetchGitHubStats = () => (
  api.post(
    'https://api.github.com/graphql',
    body,
    {
      headers: {
        Authorization: `bearer ${githubKey}`
      }
    }
  )
);
