import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { AnalyticsProvider } from "./context/analytics";

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <AnalyticsProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AnalyticsProvider>
    </React.StrictMode>
  );
};

export default App;
