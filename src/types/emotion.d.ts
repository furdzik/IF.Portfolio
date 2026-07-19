import '@emotion/react';

import { ITheme } from 'interfaces';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ITheme {}
}
