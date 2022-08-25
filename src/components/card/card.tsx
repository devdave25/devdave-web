import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  onClick: () => void;
}
export const Card: React.FC<CardProps> = ({ title, subtitle, onClick }) => {
  return (
    <div
      className="flex flex-col h-32 w-80 p-4 rounded border-2 border-cyan-900 snap-start text-ellipsis overflow-clip mb-1"
      onClick={onClick}
    >
      <h4 className="text-3xl">{title}</h4>
      <span className="flex grow mt-2 overflow-y-auto">{subtitle}</span>
    </div>
  );
};
