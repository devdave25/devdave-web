import React from "react";

interface KeyIconProps {
  text: string;
}

export const KeyIcon: React.FC<KeyIconProps> = ({ text }) => {
  return <div className="bg-surface rounded-md px-2 py-1 shadow-lg">{text}</div>;
};

export const CtrlSpaceKeyIcon: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <KeyIcon text="Ctrl" />
      <p className="text-lg">+</p>
      <KeyIcon text="Space" />
    </div>
  );
};

