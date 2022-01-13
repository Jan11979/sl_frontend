import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DrawFrameSet from "./Page/FrameSet";


//const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
//    const colorMode = React.useContext(ColorModeContext);
  const theme = React.useMemo(
      () =>
          createTheme({
            palette: {
              mode: prefersDarkMode ? 'dark' : 'light',
            },
          }),
      [prefersDarkMode],
  );

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawFrameSet />
      </ThemeProvider>
  );
}
//{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}

export default App;
