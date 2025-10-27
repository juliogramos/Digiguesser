import { GAMESTATE } from "../utils/constants";
import { useCallback, useState } from "react";

function useGameState() {
  const [gameState, setGameState] = useState(GAMESTATE.STANDBY);

  const setEvaluating = useCallback(() => {
    setGameState(GAMESTATE.EVALUATING);
  }, []);

  const setWinner = useCallback((isWinner) => {
    isWinner ? setGameState(GAMESTATE.WIN) : setGameState(GAMESTATE.LOSS);
  }, []);

  const resetGameState = useCallback((resetCallback) => {
    setGameState(GAMESTATE.STANDBY);
    resetCallback();
  }, []);

  return { gameState, setEvaluating, setWinner, resetGameState };
}

export { useGameState };
