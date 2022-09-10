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
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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
