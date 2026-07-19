export interface IStats {
  gitHub?: {
    totalContributions?: number;
  };
  stackOverflow?: {
    badgeCounts?: {
      bronze?: number;
      gold?: number;
      silver?: number;
    } | null;
    reputation?: number;
  };
}
