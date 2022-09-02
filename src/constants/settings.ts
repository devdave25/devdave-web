import { ActionEnum, Settings } from "../interfaces/settings";

export const SETTINGS: Settings = {
  groups: [
    {
      name: "String",
      actions: [
        {
          type: ActionEnum.Base64Encode,
          title: "Base64 Encode",
          subtitle: "Encode / Decode Base64 strings.",
        },
        {
          type: ActionEnum.UrlEncode,
          title: "URL Encode",
          subtitle: "Encode / Decode URL strings.",
        },
        {
          type: ActionEnum.HtmlEncode,
          title: "HTML Encode",
          subtitle: "Encode / Decode HTML strings.",
        },
        {
          type: ActionEnum.Uuid,
          title: "UUID",
          subtitle: "Generate UUIDs",
        },
      ],
    },
    {
      name: "JSON",
      actions: [
        {
          type: ActionEnum.JsonViewer,
          title: "Viewer",
          subtitle: "JSON viewer.",
        },
        {
          type: ActionEnum.JsonValidator,
          title: "Validator",
          subtitle: "JSON validator.",
        },
      ],
    },
    {
      name: "XML",
      actions: [
        {
          type: ActionEnum.XmlViewer,
          title: "Viewer",
          subtitle: "XML viewer.",
        },
        {
          type: ActionEnum.XmlValidator,
          title: "Validator",
          subtitle: "XML validator.",
        },
      ],
    },
    {
      name: "Colour",
      actions: [
        {
          type: ActionEnum.ColourConverter,
          title: "Converter",
          subtitle: "Colour converter (HEX, RGB, etc).",
        },
        {
          type: ActionEnum.ColourGenerator,
          title: "Generator",
          subtitle: "Generate colour palettes.",
        },
      ],
    },
    {
      name: "Image",
      actions: [
        {
          type: ActionEnum.ImageConverter,
          title: "Converter",
          subtitle: "Convert image file type.",
        },
        {
          type: ActionEnum.ImageResizer,
          title: "Resizer",
          subtitle: "Adjust image size.",
        },
      ],
    },
  ],
};
