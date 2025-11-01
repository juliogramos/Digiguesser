import { LevelGuesserScreen } from "./LevelGuesserScreen";
import LevelGuesserProvider from "@/context/LevelGuesser/LevelGuesserProvider";

function LevelGuesserScreenWithProvider() {
  return (
    <LevelGuesserProvider>
      <LevelGuesserScreen />
    </LevelGuesserProvider>
  );
}

export { LevelGuesserScreenWithProvider as LevelGuesserScreen };
