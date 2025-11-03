import { useCallback } from "react";
import useLocalStorageState from "./useLocalStorageState";
function useLocalStorageSwitch(key: string) {
  const { state, setAndStoreState } = useLocalStorageState(key, false);
  const toggleState = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setAndStoreState(event.target.checked),
    [setAndStoreState]
  );
  return { state, toggleState };
}

export default useLocalStorageSwitch;
