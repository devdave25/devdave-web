import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { PageIndicator } from "../components/page-indicator/page-indicator";

export default {
  title: "Components/PageIndicator",
  component: PageIndicator
} as Meta<typeof PageIndicator>;

export const Default: StoryObj<typeof PageIndicator> = {
  args: {}
};

export const TotalPages: StoryObj<typeof PageIndicator> = {
  args: {
    total: 3
  }
};

export const Initial: StoryObj<typeof PageIndicator> = {
  args: {
    initial: 2,
    total: 3
  }
};

export const Disabled: StoryObj<typeof PageIndicator> = {
  args: {
    initial: 2,
    total: 3,
    disabled: true
  }
};

export const DisabledKeyPress: StoryObj<typeof PageIndicator> = {
  args: {
    initial: 2,
    total: 3,
    disableKeyPress: true
  }
};

export const BottomPill: StoryObj<typeof PageIndicator> = {
  args: {
    initial: 2,
    total: 3,
    className: "rounded-lg",
    backgroundClassName: "bg-surface-variant text-on-surface-variant"
  },
  decorators: [
    (Story) => (
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 transform rounded-lg">
        <Story />
      </div>
    )
  ]
};
