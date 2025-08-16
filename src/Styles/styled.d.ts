import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      palette: {
        primary: string;
        secondary: string;
      };
      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
    };

    breakpoints: {
      desktop: string;
    };

    typography: {
      sizes: {
        h1: string;
        h2: string;
        h3: string;
        button: string;
        link1: string;
        link2: string;
        p1: string;
        p2: string;
        p3: string;
      };
      weights: {
        extraBold: number;
        bold: number;
        medium: number;
        regular: number;
      };
    };
  }
}
