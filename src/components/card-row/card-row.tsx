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
    <div className="pb-4">
      <h4 className="text-3xl text-on-background pb-2 pl-2">{group}</h4>
      <div
        className={classNames("gap-4", {
          "grid grid-flow-col auto-cols-max scroll-my-4 snap-x overflow-x-auto snap-mandatory px-4":
            !activeGroup,
          "flex flex-wrap px-4": activeGroup,
        })}
      >
        {actions.map(({ type, title, subtitle }, i) => (
          <Card
            key={`${group}-${i}`}
            title={title}
            subtitle={subtitle}
            onClick={() => open(type)}
            clickable
          />
        ))}
      </div>
    </div>
  );
};
