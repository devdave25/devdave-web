import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/button/button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    text: {
      name: "text",
      type: { name: "string", required: true },
      defaultValue: "Button",
    },
    primary: {
      name: "primary",
      type: { name: "boolean" },
      defaultValue: false,
    },
    secondary: {
      name: "secondary",
      type: { name: "boolean" },
      defaultValue: false,
    },
    tertiary: {
      name: "tertiary",
      type: { name: "boolean" },
      defaultValue: false,
    },
    outline: {
      name: "outline",
      type: { name: "boolean" },
      defaultValue: false,
    },
    hideBackground: {
      name: "hideBackground",
      type: { name: "boolean" },
      defaultValue: false,
    },
    raised: {
      name: "raised",
      type: { name: "boolean" },
      defaultValue: false,
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean" },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  tertiary: true,
};

export const Outline = Template.bind({});
Outline.args = {
  primary: true,
  outline: true,
};

export const TextButton = Template.bind({});
TextButton.args = {
  primary: true,
  hideBackground: true,
};

export const Rasied = Template.bind({});
Rasied.args = {
  primary: true,
  raised: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  disabled: true,
};
