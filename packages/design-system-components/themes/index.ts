import grid from './grid';
import colors from './colors';
import textScale from './text-scale';
import primaryFont from './typography';
import { Themes } from './interfaces';

const themes: Themes = {
  dark: {
    grid,
    colors: colors.dark,
    textScale,
    primaryFont,
  },
  light: {
    grid,
    colors: colors.light,
    textScale,
    primaryFont,
  },
};

export default themes;
