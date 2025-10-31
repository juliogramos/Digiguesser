import { createContext, useContext } from "react";

const gameContext = createContext();
const useGameContext = () => {
  const context = useContext(gameContext);
  if (!context) {
    throw new Error("useGame must be used withing the GameProvider!");
  }
  return context;
};

export { gameContext, useGameContext };
