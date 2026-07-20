export interface GitHubContributionsCollection {
  contributionCalendar?: {
    totalContributions?: number;
  };
  contributionYears?: number[];
  totalCommitContributions?: number;
  totalIssueContributions?: number;
  totalPullRequestContributions?: number;
  totalPullRequestReviewContributions?: number;
  totalRepositoryContributions?: number;
}

export interface GitHubStatsResponse {
  data?: {
    user?: {
      contributionsCollection?: GitHubContributionsCollection;
    };
  };
}

export interface StackOverflowBadgeCounts {
  gold?: number;
  silver?: number;
  bronze?: number;
}

export interface StackOverflowUser {
  reputation?: number;
  // eslint-disable-next-line camelcase
  badge_counts?: StackOverflowBadgeCounts;
}

export interface StackOverflowStatsResponse {
  items: StackOverflowUser[];
}
