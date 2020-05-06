/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

function usePersistedState(key: string, initialState: any): any {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
