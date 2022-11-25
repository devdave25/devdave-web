import { Buffer } from "buffer";
import { DateTime, Duration } from "luxon";

export const encodeBase64 = (plain: string): string =>
  Buffer.from(plain).toString("base64");

export const decodeBase64 = (encode: string): string =>
  Buffer.from(encode, "base64").toString("ascii");

export interface ParseDateResult {
  date: DateTime;
  method: string;
}
export const parseStringToDateTime = (text: string): ParseDateResult | undefined => {
  if (DateTime.fromHTTP(text).isValid) {
    return {
      date: DateTime.fromHTTP(text),
      method: "HTTP"
    };
  }

  if (DateTime.fromRFC2822(text).isValid) {
    return {
      date: DateTime.fromRFC2822(text),
      method: "RFC2822"
    };
  }

  if (DateTime.fromSQL(text).isValid) {
    return {
      date: DateTime.fromSQL(text),
      method: "SQL"
    };
  }

  if (DateTime.fromMillis(Date.parse(text)).isValid) {
    return {
      date: DateTime.fromMillis(Date.parse(text)),
      method: "Date.parse"
    };
  }
  
  let timestamp = parseInt(text);
  if (timestamp.toString() === text) {
    if (text.length < 12) {
      return {
        date: DateTime.fromSeconds(timestamp),
        method: "Seconds"
      };
    }

    return {
      date: DateTime.fromMillis(timestamp),
      method: "Millis"
    };
  }


  return undefined;
};

export const parseSecondsToDuration = (text: string): string => {
  let timestamp = parseInt(text);
  if (timestamp.toString() !== text) {
    return "";
  }
  return Duration.fromMillis(timestamp * 1000).shiftTo("days", "hours", "minutes", "seconds").toHuman();
}