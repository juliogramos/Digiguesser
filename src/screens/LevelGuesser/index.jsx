import { ErrorFallback } from "@/components";
import { LevelGuesserScreen } from "./LevelGuesserScreen";
import { ErrorBoundary } from "react-error-boundary";

function LevelGuesserScreenWithWrappers() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <LevelGuesserScreen />
    </ErrorBoundary>
  );
}

export { LevelGuesserScreenWithWrappers as LevelGuesserScreen };
