import React from "react";
import MediaInfo, { MediaInfo as MediaInfoInterface } from "mediainfo.js";
import { Track } from "mediainfo.js/dist/types";
import { readFileChunk } from "../utils/files";

let mediaInfo: MediaInfoInterface;

export interface IFileInfo {
  media: {
    track: Track[];
  };
  duration: number;
  size: number;
  hasVideo: boolean;
  hasAudio: boolean;
  hasImage: boolean;
  hasText: boolean;
}

interface UseFileInfoInterface {
  loading: boolean;
  analyse: (file?: File) => Promise<IFileInfo | undefined>;
}
export function useFileInfo(): UseFileInfoInterface {
  const [loading, setLoading] = React.useState(false);

  // Loads MediaInfo.js into memory, only the first time this hook runs.
  React.useEffect(() => {
    if (mediaInfo) {
      return;
    }

    MediaInfo().then((m: any) => (mediaInfo = m) as MediaInfoInterface);
  }, []);

  const analyse = async (file?: File): Promise<IFileInfo | undefined> => {
    try {
      setLoading(true);

      if (!file) {
        throw Error("No file");
      }

      if (!mediaInfo) {
        mediaInfo = (await MediaInfo()) as MediaInfoInterface;
      }

      const result = await mediaInfo.analyzeData(
        () => file.size,
        readFileChunk(file)
      );

      if (typeof result === "string" || !result) {
        throw Error("Can't read file");
      }

      const general: any = result.media.track.find(
        (r: Track) => r["@type"] === "General"
      );

      if (!general) {
        return;
      }

      const duration = +general.Duration || 0;
      const size = +general.FileSize || 0;

      const hasVideo = general.VideoCount > 0;
      const hasAudio = general.AudioCount > 0;
      const hasImage = general.ImageCount > 0;
      const hasText = general.TextCount > 0;

      return {
        media: result.media,
        duration,
        size,
        hasVideo,
        hasAudio,
        hasImage,
        hasText,
      };
    } catch (e) {
      return;
    } finally {
      setLoading(false);
    }
  };

  return {
    analyse,
    loading,
  };
}
