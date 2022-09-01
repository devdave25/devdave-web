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
      className={classNames("flex flex-row select-none bg-background", {
        dark: theme === "dark",
      })}
    >
      <main className="flex-grow h-screen overflow-auto">{children}</main>
    </div>
  );
};
