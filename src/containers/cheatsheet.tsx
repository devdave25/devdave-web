import { TmuxCheatsheet } from "@/components/tmux-cheatsheet";
import { VimCheatsheet } from "@/components/vim-cheatsheet";
import classNames from "classnames";
import React from "react";

enum CheatsheetState {
  tmux,
  vim,
}

export const Cheatsheet: React.FC = () => {
  const [state, setState] = React.useState<CheatsheetState>(
    CheatsheetState.tmux
  );

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div
        className={classNames(
          "flex w-full flex-col rounded-bl-lg bg-container2",
          {
            "flex-grow overflow-hidden": state === CheatsheetState.tmux,
            "flex-shrink": state !== CheatsheetState.tmux,
          }
        )}
      >
        <p
          className={classNames("w-full select-none rounded-xl p-4 text-lg", {
            "cursor-pointer": state !== CheatsheetState.tmux,
          })}
          onClick={() => setState(CheatsheetState.tmux)}
        >
          TMUX
        </p>
        <div
          className={classNames("flex flex-col", {
            "h-full overflow-auto": state === CheatsheetState.tmux,
            "h-0 overflow-hidden": state !== CheatsheetState.tmux,
          })}
        >
          <div className="flex flex-col gap-4 p-4">
            <TmuxCheatsheet />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "flex w-full flex-col rounded-tl-lg bg-container2",
          {
            "flex-grow overflow-hidden": state === CheatsheetState.vim,
            "flex-shrink": state !== CheatsheetState.vim,
          }
        )}
      >
        <p
          className={classNames("w-full select-none rounded-xl p-4 text-lg", {
            "cursor-pointer": state !== CheatsheetState.vim,
          })}
          onClick={() => setState(CheatsheetState.vim)}
        >
          VIM
        </p>
        <div
          className={classNames("flex flex-col", {
            "h-full overflow-auto": state === CheatsheetState.vim,
            "h-0 overflow-hidden": state !== CheatsheetState.vim,
          })}
        >
          <div className="flex flex-col gap-4 p-4">
            <VimCheatsheet />
          </div>
        </div>
      </div>
    </div>
  );
};
