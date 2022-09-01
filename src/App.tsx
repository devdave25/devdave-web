import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AnalyticsProvider } from "./context/analytics";
import { ThemeProvider } from "./context/theme";

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <AnalyticsProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AnalyticsProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
