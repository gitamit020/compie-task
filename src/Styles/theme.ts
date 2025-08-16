import type { DefaultTheme } from 'styled-components';
import colors from 'Styles/Themes/colors';
import breakpoints from 'Styles/Themes/breakpoints';
import typography from 'Styles/Themes/typography';

const theme = (): DefaultTheme => ({
  colors,
  breakpoints,
  typography,
});

export default theme;
