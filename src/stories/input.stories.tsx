import React from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Input } from "../components/input/input";
import { CheckIcon } from "@heroicons/react/24/solid";
import { LoadingIcon } from "../components/icons/loading-icon";

export default {
  title: "Components/Input",
  component: Input
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {}
};

export const Text: StoryObj<typeof Input> = {
  args: {
    text: "Text"
  }
};

export const Placeholder: StoryObj<typeof Input> = {
  args: {
    placeholder: "Placeholder"
  }
};

export const Value: StoryObj<typeof Input> = {
  args: {
    value: "Value"
  }
};

export const TextValue: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    value: "Value"
  }
};

export const Helper: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    value: "Value",
    helper: "Helper"
  }
};

export const LeftIcon: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    leftIcon: <CheckIcon />
  }
};

export const RightIcon: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    rightIcon: <CheckIcon />
  }
};

export const RightLoadingIcon: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    rightIcon: <LoadingIcon />
  }
};

export const BothIcon: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    leftIcon: <CheckIcon />,
    rightIcon: <CheckIcon />
  }
};

export const Prefix: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    prefix: "£"
  }
};

export const Suffix: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    suffix: "p"
  }
};

export const PrefixSuffix: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    prefix: "£",
    suffix: "p"
  }
};

export const PrefixSuffixWithIcons: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    prefix: "£",
    suffix: "p",
    leftIcon: <CheckIcon />,
    rightIcon: <CheckIcon />
  }
};

export const PrefixSuffixWithIconsReversed: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    prefix: "£",
    suffix: "p",
    leftIcon: <CheckIcon />,
    rightIcon: <CheckIcon />,
    leftReverse: true,
    rightReverse: true
  }
};

export const Error: StoryObj<typeof Input> = {
  args: {
    hasError: true
  }
};

export const ErrorText: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    hasError: true
  }
};

export const ErrorPlaceholder: StoryObj<typeof Input> = {
  args: {
    placeholder: "Placeholder",
    hasError: true
  }
};

export const ErrorValue: StoryObj<typeof Input> = {
  args: {
    value: "Value",
    hasError: true
  }
};

export const ErrorHelper: StoryObj<typeof Input> = {
  args: {
    value: "Value",
    hasError: true,
    helper: "Helper"
  }
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    disabled: true
  }
};

export const DisabledText: StoryObj<typeof Input> = {
  args: {
    text: "Text",
    disabled: true
  }
};

export const DisabledPlaceholder: StoryObj<typeof Input> = {
  args: {
    placeholder: "Placeholder",
    disabled: true
  }
};

export const DisabledValue: StoryObj<typeof Input> = {
  args: {
    value: "Value",
    disabled: true
  }
};
