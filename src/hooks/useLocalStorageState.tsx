import { useState, useCallback } from "react";

function useLocalStorageState(key: string, initValue: unknown | null = null) {
  if (!key) throw new Error("useLocalStorageState must be used with a key!");

  const [state, setState] = useState(() => {
    const initialState = localStorage.getItem(key);
    if (initialState) {
      return JSON.parse(initialState);
    } else {
      return initValue;
    }
  });

  const setAndStoreState = useCallback(
    (newState: unknown) => {
      setState(newState);
      localStorage.setItem(key, JSON.stringify(newState));
    },
    [key]
  );

  return { state, setState, setAndStoreState };
}

export default useLocalStorageState;
