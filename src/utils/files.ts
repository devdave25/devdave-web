import saveAs from "file-saver";

export const readFileChunk =
  (file: File) =>
  (chunkSize: number, offset: number): Promise<Uint8Array> | Uint8Array =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        if (event.target.error) {
          reject(event.target.error);
        }

        resolve(new Uint8Array(event.target.result));
      };

      reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
    });

export const saveFile = (buffer: ArrayBufferLike, filename: string): void =>
  saveAs(new Blob([buffer]), filename);
