import React, { useEffect } from "react";

const getStorageValue = (key: string, defaultValue?: string) => {
  // getting stored value
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
};

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = React.useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
