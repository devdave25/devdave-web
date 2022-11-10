import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Radio } from "../components/radio/radio";

export default {
  title: "Components/Radio",
  component: Radio,
} as Meta<typeof Radio>;

export const Default: StoryObj<typeof Radio> = {};

export const Checked: StoryObj<typeof Radio> = {
  args: {
    checked: true,
  },
};

export const Text: StoryObj<typeof Radio> = {
  args: {
    text: "Text",
  },
};

export const TextChecked: StoryObj<typeof Radio> = {
  args: {
    text: "Text",
    checked: true,
  },
};

export const Custom: StoryObj<typeof Radio> = {
  args: {
    children: <p>Custom Child</p>,
  },
};

export const CustomChecked: StoryObj<typeof Radio> = {
  args: {
    children: <p>Custom Child</p>,
    checked: true,
  },
};

export const Error: StoryObj<typeof Radio> = {
  args: {
    text: "Text",
    hasError: true,
  },
};

export const ErrorChecked: StoryObj<typeof Radio> = {
  args: {
    text: "Text",
    checked: true,
    hasError: true,
  },
};

export const Disabled: StoryObj<typeof Radio> = {
  args: {
    text: "Text",
    disabled: true,
  },
};

export const DisabledChecked: StoryObj<typeof Radio> = {
  args: {
    text: "Text",
    checked: true,
    disabled: true,
  },
};
