import React from "react";

interface KeyIconProps {
  text: string;
}

export const KeyIcon: React.FC<KeyIconProps> = ({ text }) => {
  return (
    <div className="min-w-[30px] rounded-md bg-surface px-2 py-1 text-center shadow-lg">
      {text}
    </div>
  );
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

interface KeyIconGroupProps {
  text: string;
  desc: string;
}
export const KeyIconGroup: React.FC<KeyIconGroupProps> = ({ text, desc }) => {
  return <div className="flex flex-row items-center gap-4">
    <KeyIcon text={text} />
    <p className="text-xs md:text-sm">{desc}</p>
  </div>
}
