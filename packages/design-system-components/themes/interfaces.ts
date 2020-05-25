import { ThemeProps } from 'styled-components';

interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  info: string;
  warning: string;
  error: string;
  backgroundColor: string;
  textColor: string;
  textHoverColor: string;
  borderColor: string;
  hoverColor: string;
}

type ColorThemes = { [key: string]: ThemeColors };

interface Theme {
  grid: GridConfig;
  colors: ThemeColors;
  textScale: TextScale;
  primaryFont: string;
}

type Themes = { [key: string]: Theme };

interface TextScale {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  copy: string;
  small: string;
  smaller: string;
  smallest: string;
}

interface GridConfig {
  cols: string;
  rows: string;
  colGap: string;
  rowGap: string;
  justify: string;
  align: string;
}

type CustomThemeProps = ThemeProps<Theme>;

export {
  GridConfig,
  Theme,
  ThemeColors,
  TextScale,
  Themes,
  CustomThemeProps,
  ColorThemes,
};
