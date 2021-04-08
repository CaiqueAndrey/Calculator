import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Cookies from 'js-cookie';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    Cookies.set(key, Object(state));
  }, [key, state]);
  
  return [state, setState];
}

export default usePersistedState;