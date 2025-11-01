import { useState } from "react";
import { useGameState } from "../../hooks";
import { levelGuesserContext as LevelGuesserContext } from "./useLevelGuesserContext";
import { DEFAULTRESULTS } from "../../utils/constants";

function LevelGuesserProvider(props) {
  const { gameState, setWinner, resetGameState } = useGameState();
  const [results, setResults] = useState(DEFAULTRESULTS);

  const clearResults = () => setResults(DEFAULTRESULTS);

  const value = {
    gameState,
    setWinner,
    resetGameState,
    results,
    setResults,
    clearResults,
  };
  return <LevelGuesserContext.Provider value={value} {...props} />;
}

export default LevelGuesserProvider;
