import { Buffer } from "buffer";

export const encodeBase64 = (plain: string): string => Buffer.from(plain).toString("base64");

export const decodeBase64 = (encode: string): string => Buffer.from(encode, "base64").toString("ascii");