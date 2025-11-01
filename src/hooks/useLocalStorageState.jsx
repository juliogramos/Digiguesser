import { useState, useCallback } from "react";

function useLocalStorageState(key, isNumber, initValue = null) {
  if (!key) throw new Error("useLocalStorageState must be used with a key!");

  let initialState = localStorage.getItem(key);
  initialState ? (initialState = JSON.parse(initialState)) : initValue;
  const [state, setState] = useState(initialState);

  const storeState = useCallback(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return { state, setState, storeState };
}

export default useLocalStorageState;
