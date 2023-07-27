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
    <div className="h-full w-full">
      <div className="rounded">
        <p>Tmux</p>
      </div>
    </div>
  );
};
