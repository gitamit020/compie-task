import type { JSX, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'Styles';
import theme from 'Styles/theme';

type StyledProviderProps = PropsWithChildren;

const StyledProvider = ({ children }: StyledProviderProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyledProvider;
