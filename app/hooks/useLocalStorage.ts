import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorageState<T>(
  initialState: T,
  key: string
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialState;

    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? (JSON.parse(storedValue) as T) : initialState;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialState;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [value, key]);

  return [value, setValue];
}
