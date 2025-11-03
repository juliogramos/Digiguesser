import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import customTheme from "@/style/customTheme";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import LevelGuesserScreen from "./screens/LevelGuesser/LevelGuesserScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <QueryClientProvider client={queryClient}>
            <Container>
              <LevelGuesserScreen />
            </Container>
          </QueryClientProvider>
        </ErrorBoundary>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
