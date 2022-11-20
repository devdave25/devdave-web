import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { LoadingIcon } from "../components/icons/loading-icon";

export default {
  title: "Components/LoadingIcon",
  component: LoadingIcon
} as Meta<typeof LoadingIcon>;

export const Default: StoryObj<typeof LoadingIcon> = {
  args: {}
};
