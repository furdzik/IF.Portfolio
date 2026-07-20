import { createSelector } from 'reselect';

import { IStats } from 'types/statsShape';

interface MainPageState {
  loading: boolean;
  stats: IStats;
}

const mainPageSelector = (store: { MainPage: MainPageState }) => store.MainPage;

export default createSelector(
  mainPageSelector,
  (vocab) => ({
    ...vocab
  })
);
