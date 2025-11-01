import { useCallback, useState } from "react";
import { useGameState, useStreak } from "@/hooks";
import { levelGuesserContext as LevelGuesserContext } from "./useLevelGuesserContext";
import { DEFAULTRESULTS } from "@/utils/constants";

function LevelGuesserProvider(props) {
  const { gameState, setWinner, resetGameState } = useGameState();
  const [results, setResults] = useState(DEFAULTRESULTS);
  const { streak, highscore, increaseStreak, resetStreak } = useStreak();

  const clearResults = useCallback(() => setResults(DEFAULTRESULTS), []);

  const value = {
    gameState,
    setWinner,
    resetGameState,
    results,
    setResults,
    clearResults,
    streak,
    highscore,
    increaseStreak,
    resetStreak,
  };
  return <LevelGuesserContext.Provider value={value} {...props} />;
}

export default LevelGuesserProvider;
