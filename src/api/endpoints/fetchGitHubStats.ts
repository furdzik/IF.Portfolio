import { githubUser, githubKey } from 'config/environment';
import api from 'config/api';

import { GitHubStatsResponse } from 'interfaces';

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

export const fetchGitHubStats = (): Promise<GitHubStatsResponse> => (
  api.post<GitHubStatsResponse, GitHubStatsResponse>(
    'https://api.github.com/graphql',
    body,
    {
      headers: {
        Authorization: `bearer ${githubKey}`
      }
    }
  )
);
