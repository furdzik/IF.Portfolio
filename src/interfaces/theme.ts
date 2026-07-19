export interface Color {
  darkGreen: string;
  green: string;
  lightGreen: string;
  darkPink: string;
  pink: string;
  lightPink: string;
  violet: string;
  lightGray: string;
  gray: string;
  darkGray: string;
  red: string;
}

export interface MainColors {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
}

export interface MonoColors {
  white: string;
  black: string;
}

export interface TextColors {
  primary: string;
  secondary: string;
  colored: string;
}

export interface FontFamily {
  mainFont: string;
  roboto: string;
  shadowsInto: string;
  lobster: string;
  fallback: string;
  fallbackIos: string;
  fallbackAndroid: string;
  appleEmoji: string;
  windowsEmoji: string;
  windowsSymbol: string;
}

export interface FontSizeResponsive {
  headingBig: string;
  headingMedium: string;
  headingSmall: string;
  medium: string;
  normal: string;
  small: string;
}

export interface FontSize extends FontSizeResponsive {
  base: string;
  desktop: FontSizeResponsive;
  big: string;
  header: string;
  headerDesktop: string;
  h1Small: string;
  h2Small: string;
  h3Small: string;
  h4Small: string;
  h1Regular: string;
  h2Regular: string;
  h3Regular: string;
  h4Regular: string;
}

export interface LineHeight {
  normal: number;
}

export interface FontWeight {
  ultraLight: number;
  light: number;
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
  black: number;
}

export interface Layout {
  width: string;
  sidePadding: string;
  background: string;
}

export interface ITheme {
  color: Color;
  mainColors: MainColors;
  textColors: TextColors;
  monoColors: MonoColors;
  fontFamily: FontFamily;
  fontSize: FontSize;
  lineHeight: LineHeight;
  fontWeight: FontWeight;
  layout: Layout;
}
