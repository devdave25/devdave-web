import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { TextArea } from "../components/textarea/textarea";
import { CopyIcon } from "../components/icons/copy-icon";

export default {
  title: "Components/TextArea",
  component: TextArea
} as Meta<typeof TextArea>;

export const Default: StoryObj<typeof TextArea> = {
  args: {}
};

export const Text: StoryObj<typeof TextArea> = {
  args: {
    text: "Text"
  }
};

export const TitleText: StoryObj<typeof TextArea> = {
  args: {
    title: "Title",
    text: "Text"
  }
};

export const Placeholder: StoryObj<typeof TextArea> = {
  args: {
    placeholder: "Placeholder"
  }
};

export const Value: StoryObj<typeof TextArea> = {
  args: {
    value: "Value"
  }
};

export const ValueWithCopy: StoryObj<typeof TextArea> = {
  args: {
    value: "Value",
    iconActions: [<CopyIcon value={"Value"} />]
  }
};

export const Error: StoryObj<typeof TextArea> = {
  args: {
    hasError: true
  }
};

export const ErrorText: StoryObj<typeof TextArea> = {
  args: {
    text: "Text",
    hasError: true
  }
};

export const ErrorPlaceholder: StoryObj<typeof TextArea> = {
  args: {
    placeholder: "Placeholder",
    hasError: true
  }
};

export const ErrorValue: StoryObj<typeof TextArea> = {
  args: {
    value: "Value",
    hasError: true
  }
};

export const Disabled: StoryObj<typeof TextArea> = {
  args: {
    disabled: true
  }
};

export const DisabledText: StoryObj<typeof TextArea> = {
  args: {
    text: "Text",
    disabled: true
  }
};

export const DisabledPlaceholder: StoryObj<typeof TextArea> = {
  args: {
    placeholder: "Placeholder",
    disabled: true
  }
};

export const DisabledValue: StoryObj<typeof TextArea> = {
  args: {
    value: "Value",
    disabled: true
  }
};
