import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Checkbox } from "../components/checkbox/checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

export const Default: StoryObj<typeof Checkbox> = {};

export const Checked: StoryObj<typeof Checkbox> = {
  args: {
    checked: true,
  },
};

export const Text: StoryObj<typeof Checkbox> = {
  args: {
    text: "Text",
  },
};

export const TextChecked: StoryObj<typeof Checkbox> = {
  args: {
    text: "Text",
    checked: true,
  },
};

export const Custom: StoryObj<typeof Checkbox> = {
  args: {
    children: <p>Custom Child</p>,
  },
};

export const CustomChecked: StoryObj<typeof Checkbox> = {
  args: {
    children: <p>Custom Child</p>,
    checked: true,
  },
};

export const Error: StoryObj<typeof Checkbox> = {
  args: {
    text: "Text",
    hasError: true,
  },
};

export const ErrorChecked: StoryObj<typeof Checkbox> = {
  args: {
    text: "Text",
    checked: true,
    hasError: true,
  },
};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: {
    text: "Text",
    disabled: true,
  },
};

export const DisabledChecked: StoryObj<typeof Checkbox> = {
  args: {
    text: "Text",
    checked: true,
    disabled: true,
  },
};
