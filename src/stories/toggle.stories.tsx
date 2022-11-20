import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Toggle } from "../components/toggle/toggle";

export default {
  title: "Components/Toggle",
  component: Toggle
} as Meta<typeof Toggle>;

export const Default: StoryObj<typeof Toggle> = {};

export const Checked: StoryObj<typeof Toggle> = {
  args: {
    checked: true
  }
};

export const LeftText: StoryObj<typeof Toggle> = {
  args: {
    leftText: "Text"
  }
};

export const LeftTextChecked: StoryObj<typeof Toggle> = {
  args: {
    leftText: "Text",
    checked: true
  }
};

export const RightText: StoryObj<typeof Toggle> = {
  args: {
    rightText: "Text"
  }
};

export const RightTextChecked: StoryObj<typeof Toggle> = {
  args: {
    rightText: "Text",
    checked: true
  }
};

export const BothText: StoryObj<typeof Toggle> = {
  args: {
    leftText: "Text",
    rightText: "Text"
  }
};

export const BothTextChecked: StoryObj<typeof Toggle> = {
  args: {
    leftText: "Text",
    rightText: "Text",
    checked: true
  }
};

export const Custom: StoryObj<typeof Toggle> = {
  args: {
    children: <p>Custom Child</p>
  }
};

export const CustomChecked: StoryObj<typeof Toggle> = {
  args: {
    children: <p>Custom Child</p>,
    checked: true
  }
};

export const Error: StoryObj<typeof Toggle> = {
  args: {
    rightText: "Text",
    hasError: true
  }
};

export const ErrorChecked: StoryObj<typeof Toggle> = {
  args: {
    rightText: "Text",
    checked: true,
    hasError: true
  }
};

export const Disabled: StoryObj<typeof Toggle> = {
  args: {
    rightText: "Text",
    disabled: true
  }
};

export const DisabledChecked: StoryObj<typeof Toggle> = {
  args: {
    rightText: "Text",
    checked: true,
    disabled: true
  }
};
