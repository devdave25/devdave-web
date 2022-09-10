import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Pill } from "../components/pill/pill";

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {
    text: {
      name: "text",
      type: { name: "string", required: true },
      defaultValue: "Pill",
    },
    selected: {
      name: "text",
      type: { name: "boolean", required: true },
      defaultValue: false,
    },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  selected: true,
};
