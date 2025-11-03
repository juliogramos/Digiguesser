import type { GameState } from "@/utils/constants";
import { useCallback, useState } from "react";

function useGameState() {
  const [gameState, setGameState] = useState<GameState>("standby");

  const setWinner = useCallback((isWinner: boolean) => {
    if (isWinner) {
      setGameState("win");
    } else {
      setGameState("loss");
    }
  }, []);

  const resetGameState = useCallback((resetCallback: () => void) => {
    setGameState("standby");
    resetCallback();
  }, []);

  return { gameState, setWinner, resetGameState };
}

export default useGameState;
