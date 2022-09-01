import React from "react";
import { AnalyticsContext } from "../context/analytics";
import { UnknownObject } from "../interfaces/types";
import { useUser } from "./use-user";

type Analytics = (eventName: string, data?: UnknownObject | undefined) => void;

export const useAnalytics = (): {
  trackUserEvent: Analytics;
} => {
  const { trackEvent } = React.useContext(AnalyticsContext);
  const { username } = useUser();

  const trackUserEvent = (eventName: string, data: UnknownObject = {}) => {
    trackEvent(eventName, { username, data });
  };

  return { trackUserEvent };
};
