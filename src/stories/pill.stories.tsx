import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Pill } from "../components/pill/pill";

export default {
  title: "Components/Pill",
  component: Pill,
} as Meta<typeof Pill>;

export const Primary: StoryObj<typeof Pill> = {
  args: {
    selected: true,
    onClick: () => {},
    text: "Text",
  },
};
