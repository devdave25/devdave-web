import classNames from "classnames";
import React from "react";
import { useTheme } from "../context/theme";

interface MainLayoutProps {
  children: React.ReactElement;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("flex select-none flex-row bg-background", {
        dark: theme === "dark"
      })}
    >
      <main className="h-screen flex-grow overflow-auto">{children}</main>
    </div>
  );
};
