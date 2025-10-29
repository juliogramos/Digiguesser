import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import defaultTheme from "./style/defaultTheme.jsx";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </CssBaseline>
    </ThemeProvider>
  </StrictMode>
);
