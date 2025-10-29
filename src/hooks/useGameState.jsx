import { GAMESTATE } from "../utils/constants";
import { useCallback, useState } from "react";

function useGameState() {
  const [gameState, setGameState] = useState(GAMESTATE.STANDBY);

  const setWinner = useCallback((isWinner, winnerValue, userValue) => {
    isWinner ? setGameState(GAMESTATE.WIN) : setGameState(GAMESTATE.LOSS);
  }, []);

  const resetGameState = useCallback((resetCallback) => {
    setGameState(GAMESTATE.STANDBY);
    resetCallback();
  }, []);

  return { gameState, setWinner, resetGameState };
}

export { useGameState };
