import { useState } from "react";
import { useGameState } from "../hooks/useGameState";
import { gameContext as GameContext } from "../hooks/useGameContext";
import { DEFAULTRESULTS } from "../utils/constants";

function GameProvider(props) {
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
  return <GameContext.Provider value={value} {...props} />;
}

export { GameProvider };
