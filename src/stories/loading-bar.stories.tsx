import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { LoadingBar } from "../components/loading-bar/loading-bar";

export default {
  title: "Components/LoadingBar",
  component: LoadingBar
} as Meta<typeof LoadingBar>;

export const Default: StoryObj<typeof LoadingBar> = {
  args: {}
};

export const Text: StoryObj<typeof LoadingBar> = {
  args: {
    loading: true
  }
};

export const Placeholder: StoryObj<typeof LoadingBar> = {
  args: {
    loading: true,
    indeterminate: true
  }
};

export const Value: StoryObj<typeof LoadingBar> = {
  args: {
    loading: true,
    progress: 25
  }
};
