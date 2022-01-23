import { createSelector } from 'reselect';

const mainPageSelector = (store) => store.MainPage;

export default createSelector(
  mainPageSelector,
  (vocab) => ({
    ...vocab
  })
);
