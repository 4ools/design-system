import grid from './grid';
import colors from './colors';
import textScale from './text-scale';
import primaryFont from './typography';
import { Themes } from './interfaces';

const themes: Themes = {
  dark: {
    backgroundColor: '#121212',
    textColor: '#ffffff',
    borderColor: '#333333',
    grid,
    colors: colors.dark,
    textScale,
    primaryFont,
  },
  light: {
    backgroundColor: '#ffffff',
    textColor: '#121212',
    borderColor: '#cccccc',
    grid,
    colors: colors.light,
    textScale,
    primaryFont,
  },
};

export default themes;
