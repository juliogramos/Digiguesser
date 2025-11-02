import { useCallback } from "react";
import { useLocalStorageState } from ".";
function useLocalStorageSwitch(key) {
  const { state, setAndStoreState } = useLocalStorageState(key, false);
  const toggleState = useCallback(
    (event) => setAndStoreState(event.target.checked),
    [setAndStoreState]
  );
  return { state, toggleState };
}

export default useLocalStorageSwitch;
