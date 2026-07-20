import { stackOverflowApiUrl, stackOverflowUser } from 'config/environment';
import api from 'config/api';

import { StackOverflowStatsResponse } from 'interfaces';

export const fetchStackOverflowStats = (): Promise<StackOverflowStatsResponse> => (
  api.get<StackOverflowStatsResponse, StackOverflowStatsResponse>(
    `${stackOverflowApiUrl}/users/${stackOverflowUser}?order=desc&sort=reputation&site=stackoverflow`
  )
);
