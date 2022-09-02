import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Modals } from "./containers/modals/modals";
import { AnalyticsProvider } from "./context/analytics";
import { ModalProvider } from "./context/modal";
import { ThemeProvider } from "./context/theme";

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <AnalyticsProvider>
          <ModalProvider>
            <BrowserRouter>
              <AppRoutes />
              <Modals />
            </BrowserRouter>
          </ModalProvider>
        </AnalyticsProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
