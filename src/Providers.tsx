import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import customTheme from "@/style/customTheme";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={customTheme} defaultMode="light">
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

export default Providers;
