import { createContext, useContext } from "react";

const levelGuesserContext = createContext();
const useLevelGuesserContext = () => {
  const context = useContext(levelGuesserContext);
  if (!context) {
    throw new Error("useGame must be used withing the GameProvider!");
  }
  return context;
};

export { useLevelGuesserContext, levelGuesserContext };
