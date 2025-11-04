import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import customTheme from "@/style/customTheme";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import LevelGuesserScreen from "./screens/LevelGuesser/LevelGuesserScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

const queryClient = new QueryClient();

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        <QueryClientProvider client={queryClient}>
          <Container>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              {children}
            </ErrorBoundary>
          </Container>
        </QueryClientProvider>
      </CssBaseline>
    </ThemeProvider>
  );
};

function App() {
  return (
    <Providers>
      <LevelGuesserScreen />
    </Providers>
  );
}

export default App;
