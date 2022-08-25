import React from "react";
import Analytics from "analytics";
import { UnknownObject } from "../interfaces/types";

/* Initialize analytics */
const analytics = Analytics({
  plugins: [],
});

interface AnalyticsContextInterface {
  trackPage: () => void;
}

export const AnalyticsContext = React.createContext<AnalyticsContextInterface>({
  trackPage: () => null,
});

interface AnalyticsProviderProps {
  children: React.ReactElement;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
}) => {
  const trackPage = () => {
    analytics.page(
      {},
      {
        plugins: {
          all: true,
        },
      }
    );
  };

  return (
    <AnalyticsContext.Provider value={{ trackPage }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextInterface => {
  const context = React.useContext(AnalyticsContext);

  if (context === undefined) {
    throw new Error("useAnalytics must be used within a AnalyticsProvider");
  }

  return context;
};

export const rawAnalyticsTrack = (
  event: string,
  data: UnknownObject = {}
): void => {
  if (!analytics) {
    return;
  }

  analytics.track(event, data);
};
