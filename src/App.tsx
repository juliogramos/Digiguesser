import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import customTheme from "@/style/customTheme";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <Button>Hello World!</Button>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
