import { ActionEnum, Settings } from "../interfaces/settings";

export const SETTINGS: Settings = {
  groups: [
    {
      name: "String",
      actions: [
        {
          type: ActionEnum.Encode,
          title: "Base64 Encode",
          subtitle: "Encode / Decode Base64 strings.",
        },
        {
          type: ActionEnum.Encode,
          title: "URL Encode",
          subtitle: "Encode / Decode URL strings.",
        },
        {
          type: ActionEnum.Encode,
          title: "HTML Encode",
          subtitle: "Encode / Decode HTML strings.",
        },
        {
          type: ActionEnum.Encode,
          title: "UUID",
          subtitle: "Generate UUIDs",
        },
      ],
    },
    {
      name: "JSON",
      actions: [
        {
          type: ActionEnum.Encode,
          title: "Viewer",
          subtitle: "JSON viewer.",
        },
        {
          type: ActionEnum.Encode,
          title: "Validator",
          subtitle: "JSON validator.",
        },
      ],
    },
    {
      name: "XML",
      actions: [
        {
          type: ActionEnum.Encode,
          title: "Viewer",
          subtitle: "XML viewer.",
        },
        {
          type: ActionEnum.Encode,
          title: "Validator",
          subtitle: "XML validator.",
        },
      ],
    },
    {
      name: "Colour",
      actions: [
        {
          type: ActionEnum.Encode,
          title: "Converter",
          subtitle: "Colour converter (HEX, RGB, etc).",
        },
        {
          type: ActionEnum.Encode,
          title: "Generator",
          subtitle: "Generate colour palettes.",
        },
      ],
    },
    {
      name: "Image",
      actions: [
        {
          type: ActionEnum.Encode,
          title: "Converter",
          subtitle: "Convert image file type.",
        },
        {
          type: ActionEnum.Encode,
          title: "Resizer",
          subtitle: "Adjust image size.",
        },
      ],
    },
  ],
};
