import { ActionEnum, Settings } from "../interfaces/settings";

export const SETTINGS: Settings = {
  groups: [
    {
      name: "String",
      actions: [
        {
          type: ActionEnum.EncodeDecode,
          title: "Encode / Decode",
          subtitle: "Encode / Decode Base64 & URL & HTML strings.",
        },
        {
          type: ActionEnum.Uuid,
          title: "UUID",
          subtitle: "Generate UUIDs.",
        },
        {
          type: ActionEnum.Jwt,
          title: "JWT",
          subtitle: "Decode JWT tokens.",
        },
      ],
    },
    {
      name: "Date",
      actions: [
        {
          type: ActionEnum.Timestamp,
          title: "Date / Timestamp",
          subtitle: "Convert Dates & Timestamps.",
        },
        {
          type: ActionEnum.DateMaths,
          title: "Add & Subtract",
          subtitle: "Addition / Substraction of Dates.",
        },
        {
          type: ActionEnum.Timezones,
          title: "Timezones",
          subtitle: "Table of Timezones.",
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
        {
          type: ActionEnum.ColourWheel,
          title: "Wheel",
          subtitle: "Colour wheel.",
        },
      ],
    },
    {
      name: "File",
      actions: [
        {
          type: ActionEnum.FileInfo,
          title: "File Info",
          subtitle: "Load file info.",
        },
        {
          type: ActionEnum.Image,
          title: "Image Functions",
          subtitle: "Convert, resize.",
        },
        {
          type: ActionEnum.Video,
          title: "Video Functions",
          subtitle: "Convert, resize, trim.",
        },
      ],
    },
    {
      name: "PDF",
      actions: [
        {
          type: ActionEnum.PdfViewer,
          title: "Viewer",
          subtitle: "PDF file viewer.",
        },
        {
          type: ActionEnum.PdfCombiner,
          title: "Combiner",
          subtitle: "Combine PDF files.",
        },
      ],
    },
  ],
};
