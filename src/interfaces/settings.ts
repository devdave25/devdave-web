export enum ActionEnum {
  Encode,
  Decode,
  Parse,
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
