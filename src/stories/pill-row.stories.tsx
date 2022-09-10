import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PillRow } from "../components/pill-row/pill-row";

export default {
  title: "Components/PillRow",
  component: PillRow,
} as ComponentMeta<typeof PillRow>;

const Template: ComponentStory<typeof PillRow> = (args) => (
  <PillRow {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  groups: ["Pill 1", "Pill 2", "Pill 3"],
  active: "Pill 1",
};
