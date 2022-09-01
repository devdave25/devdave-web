import React from "react";
import Analytics from "analytics";
import { UnknownObject } from "../interfaces/types";

/* Initialize analytics */
const analytics = Analytics({
  plugins: [],
});

interface AnalyticsContextInterface {
  trackPage: () => void;
  trackEvent: (eventName: string, data?: UnknownObject | undefined) => void;
}

export const AnalyticsContext = React.createContext<AnalyticsContextInterface>({
  trackPage: () => null,
  trackEvent: () => null,
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

  const trackEvent = (eventName: string, data?: UnknownObject | undefined) => {
    analytics.track(eventName, data, {
      plugins: {
        all: true,
      },
    });
  };

  return (
    <AnalyticsContext.Provider value={{ trackPage, trackEvent }}>
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
