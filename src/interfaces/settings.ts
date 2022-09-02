export enum ActionEnum {
  Base64Encode,
  UrlEncode,
  HtmlEncode,
  Uuid,
  JsonViewer,
  JsonValidator,
  XmlViewer,
  XmlValidator,
  ColourConverter,
  ColourGenerator,
  ImageConverter,
  ImageResizer
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
