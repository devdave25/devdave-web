import React from "react";

interface ThemeContextInterface {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: "",
  setTheme: () => null,
  toggleTheme: () => null,
});

interface ThemeProviderProps {
  children: React.ReactElement;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextInterface => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
