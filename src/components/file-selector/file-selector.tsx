import React from "react";

interface FileSelectorProps {
  multiple?: boolean;
  onSelect: (files: File[]) => void;
}
export const FileSelector: React.FC<FileSelectorProps> = ({
  multiple,
  onSelect,
}) => {
  const [files, setFiles] = React.useState<FileList | undefined>()

  const onChange = (fileList: FileList | null) => {
    if (!fileList) {
      setFiles(undefined);
      onSelect([]);
      return;
    }

    setFiles(fileList);
    onSelect(Array.from(fileList));
  }

  return (
    <input
      multiple={multiple}
      type="file"
      // value={files ? files : undefined}
      onChange={({ target }) => onChange(target.files)}
    />
  );
};
