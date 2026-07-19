import { ITheme } from 'interfaces';

import { colors, typography } from './basic';

const theme: ITheme = {
  ...colors,
  ...typography,

  layout: {
    width: '100rem',
    sidePadding: '2rem',
    background: colors.monoColors.white // '#95e6c3'
  }
};

export default theme;
