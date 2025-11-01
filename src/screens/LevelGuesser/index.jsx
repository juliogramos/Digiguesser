import { ErrorFallback } from "@/components";
import { LevelGuesserScreen } from "./LevelGuesserScreen";
import LevelGuesserProvider from "@/context/LevelGuesser/LevelGuesserProvider";
import { ErrorBoundary } from "react-error-boundary";

function LevelGuesserScreenWithWrappers() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <LevelGuesserProvider>
        <LevelGuesserScreen />
      </LevelGuesserProvider>
    </ErrorBoundary>
  );
}

export { LevelGuesserScreenWithWrappers as LevelGuesserScreen };
