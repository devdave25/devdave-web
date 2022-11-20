import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Button } from "../components/button/button";

export default {
  title: "Components/Button",
  component: Button
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    text: "Button"
  }
};

export const Primary: StoryObj<typeof Button> = {
  args: {
    text: "Button",
    primary: true
  }
};

export const Secondary: StoryObj<typeof Button> = {
  args: {
    text: "Button",
    secondary: true
  }
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    text: "Button",
    tertiary: true
  }
};

export const Outline: StoryObj<typeof Button> = {
  args: {
    text: "Button",
    primary: true,
    outline: true
  }
};

export const TextButton: StoryObj<typeof Button> = {
  args: {
    text: "Button",
    primary: true,
    hideBackground: true
  }
};

export const Rasied: StoryObj<typeof Button> = {
  args: {
    text: "Button",
    primary: true,
    raised: true
  }
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    text: "Button",
    primary: true,
    disabled: true
  }
};
