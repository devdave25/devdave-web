import React from "react";
import { Pill } from "../pill/pill";

interface PillRowProps {
  groups: string[];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
export const PillRow: React.FC<PillRowProps> = ({
  groups,
  active,
  setActive,
}) => {
  return (
    <div className="flex flex-row gap-x-4">
      {groups.map((g) => (
        <Pill
          key={g}
          text={g}
          selected={active === g}
          onClick={() => setActive(active !== g ? g : "")}
        />
      ))}
    </div>
  );
};
