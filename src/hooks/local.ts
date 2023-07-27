import React from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = React.useState<T>(defaultValue);

  const changeValue = (value: T) => {
    if (!window?.localStorage) {
      return;
    }

    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  React.useEffect(() => {
    if (!window?.localStorage) {
      return;
    }

    const stored = localStorage.getItem(key);

    if (!stored) {
      setValue(defaultValue);
      localStorage.setItem(key, JSON.stringify(defaultValue));
    } else {
      setValue(JSON.parse(stored));
    }
  }, []);

  return [value, changeValue] as const;
};
