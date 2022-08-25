import React from "react";

interface MainLayoutProps {
  children: React.ReactElement;
}
export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row select-none">
      <main className="flex-grow h-screen overflow-auto">{children}</main>
    </div>
  );
};
