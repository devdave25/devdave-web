import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { PdfThumbnails } from "../components/pdf-thumbnails/pdf-thumbnails";

export default {
  title: "Components/PdfThumbnails",
  component: PdfThumbnails
} as Meta<typeof PdfThumbnails>;

export const Default: StoryObj<typeof PdfThumbnails> = {
  args: {}
};
