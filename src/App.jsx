import { Container } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components";
import { LevelGuesserScreen } from "./screens/LevelGuesser";

function App() {
  return (
    <Container>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LevelGuesserScreen />
      </ErrorBoundary>
    </Container>
  );
}

export default App;
