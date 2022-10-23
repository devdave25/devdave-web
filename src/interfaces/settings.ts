export enum ActionEnum {
  EncodeDecode,
  Uuid,
  Jwt,
  Timestamp,
  DateMaths,
  Timezones,
  JsonViewer,
  JsonValidator,
  XmlViewer,
  XmlValidator,
  ColourConverter,
  ColourGenerator,
  ColourWheel,
  FileInfo,
  Image,
  Video,
  PdfViewer,
  PdfCombiner,
}

export interface Action {
  type: ActionEnum;
  title: string;
  subtitle: string;
}

export interface Group {
  name: string;
  actions: Action[];
}

export interface Settings {
  groups: Group[];
}
