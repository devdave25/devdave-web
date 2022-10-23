import React from "react";
import { createFFmpeg, FFmpeg } from "@ffmpeg/ffmpeg";

let ffmpeg: FFmpeg;

export interface IFileInfo {}

interface UseFfmpegInterface {
  loading: boolean;
  progress?: number;
  convert: (file: File, output: string) => Promise<Uint8Array | undefined>;
}
export function useFfmpeg(): UseFfmpegInterface {
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState<number>(0);

  // Loads MediaInfo.js into memory, only the first time this hook runs.
  React.useEffect(() => {
    if (ffmpeg) {
      if (!ffmpeg.isLoaded()) {
        ffmpeg.load();
      }
      return;
    }

    ffmpeg = createFFmpeg({
      log: false,
    });

    ffmpeg.setProgress((r) => {
      setProgress(Math.round((+r.ratio || 0) * 100));
    });
  }, []);

  const convert = async (
    file: File,
    output: string
  ): Promise<Uint8Array | undefined> => {
    try {
      setLoading(true);

      if (!file) {
        throw Error("No file");
      }

      if (!file.size) {
        throw Error("File is empty");
      }

      // Ensure initalisation
      if (!ffmpeg.isLoaded()) {
        await ffmpeg.load();
      }

      const outputFile = `o.${output}`;

      // Create initial file
      ffmpeg.FS(
        "writeFile",
        file.name,
        new Uint8Array(await file.arrayBuffer())
      );

      // Run ffmpeg command
      await ffmpeg.run("-i", file.name, outputFile);

      // Read generated file
      const data = ffmpeg.FS("readFile", outputFile);

      // Clean up
      ffmpeg.FS("unlink", file.name);
      ffmpeg.FS("unlink", outputFile);

      return data;
    } catch (e) {
      throw e;
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  return {
    convert,
    loading,
    progress,
  };
}
