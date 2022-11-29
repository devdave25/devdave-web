import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { StaticHide } from "../components/static-hide/static-hide";

export default {
  title: "Components/StaticHide",
  component: StaticHide
} as Meta<typeof StaticHide>;

export const Default: StoryObj<typeof StaticHide> = {
  args: {
    children: <div className="m-4 h-8 w-8 rounded bg-primary" />
  }
};

export const Delayed: StoryObj<typeof StaticHide> = {
  args: {
    children: <div className="m-4 h-8 w-8 rounded bg-primary" />,
    delay: 4000
  }
};
