import classNames from "classnames";
import React from "react";
import { Action, ActionEnum } from "../../interfaces/settings";
import { Card } from "../card/card";

interface CardRowProps {
  group: string;
  activeGroup: string;
  actions: Action[];
  open: (type: ActionEnum) => void;
}
export const CardRow: React.FC<CardRowProps> = ({
  group,
  activeGroup,
  actions,
  open,
}) => {
  if (activeGroup && activeGroup !== group) {
    return <></>;
  }

  return (
    <div>
      {group}
      <div
        className={classNames("gap-4", {
          "grid grid-flow-col auto-cols-max scroll-pl-4 snap-x overflow-x-auto":
            !activeGroup,
          "flex flex-wrap": activeGroup,
        })}
      >
        {actions.map(({ type, title, subtitle }, i) => (
          <Card
            key={`${group}-${i}`}
            title={title}
            subtitle={subtitle}
            onClick={() => open(type)}
          />
        ))}
      </div>
    </div>
  );
};
