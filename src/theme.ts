import 'styled-components';

export const theme = {
  primaryColor: '#729994',
  subColor: '#178B8D',
  secondaryColor: '#FBAA0B',
  baseText: '#333',
  secondText: '#aaa',
  subText: '#efefef',
  baseColor1: '#fff',
  baseColor2: '#efefef',
  baseColor3: '#091622',
  layout: {
    width: 960,
  },
  FONT: {
    XXXLARGE: 3.2,
    XXLARGE: 2.4,
    XLARGE: 1.8,
    LARGE: 1.6,
    MEDIUM: 1.4,
    BASE: 1.2,
    SMALL: 1.1,
    XSMALL: 1.0,
    TINY: 0.8,
  },
} as const;

type AppTheme = typeof theme;

declare module 'styled-components' {
  interface DefaultTheme extends AppTheme {}
}
