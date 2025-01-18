import { ThemeProvider } from "styled-components";

import theme from "./style/theme";
import GlobalStyles from "./style/GlobalStyles";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRouter />
      </ThemeProvider>
    </>
  );
};

export default App;
