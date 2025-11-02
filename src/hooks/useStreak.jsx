import { useState, useCallback } from "react";
import { useLocalStorageState } from ".";

function useStreak() {
  const [streak, setStreak] = useState(0);

  const {
    state: highscore,
    setState: setHighscore,
    storeState: storeHighscore,
  } = useLocalStorageState("local-storage-streak", 0);

  const increaseStreak = useCallback(() => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > highscore) {
      setHighscore(newStreak);
      storeHighscore();
    }
  }, [highscore, setHighscore, storeHighscore, streak]);

  const resetStreak = useCallback(() => {
    console.log("RESETED");
    setStreak(0);
  }, []);

  return { streak, highscore, increaseStreak, resetStreak };
}

export default useStreak;
