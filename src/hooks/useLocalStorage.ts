import { useState } from "react";

export const useLocalStorage = (keyName: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });
  const setValue = (newValue: any) => {
    console.log(
      "debug ~ file: useLocalStorage.ts:18 ~ setValue ~ newValue:",
      newValue
    );
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.error(
        "debug ~ file: useLocalStorage.ts:21 ~ setValue ~ err:",
        err
      );
    }
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
