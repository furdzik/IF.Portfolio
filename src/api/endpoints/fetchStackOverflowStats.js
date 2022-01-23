import { stackOverflowApiUrl, stackOverflowUser } from '@config/environment';
import api from '@config/api';

export const fetchStackOverflowStats = (name) => (
  api.get(`${stackOverflowApiUrl}/users/${stackOverflowUser}?order=desc&sort=reputation&site=stackoverflow`)
);
