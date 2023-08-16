import { KeyIconGroup } from "@/components/key-icon";

export const TmuxCheatsheet: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-2xl font-bold">Session</p>

      <KeyIconGroup text="$tmux" desc="New session" />
      <KeyIconGroup text="$tmux new -s {name}" desc="New session with name" />
      <KeyIconGroup text="$tmux kill-ses -t {name}" desc="Kill name session" />

      <KeyIconGroup text="s" desc="Show all sessions" />
      <KeyIconGroup text="$" desc="Rename session" />
      <KeyIconGroup text="w" desc="Session and Window Preview" />
      <KeyIconGroup text="(" desc="Move to previous session" />
      <KeyIconGroup text=")" desc="Move to next session" />

      <p className="text-2xl font-bold">Window</p>

      <KeyIconGroup text="c" desc="Create new window" />
      <KeyIconGroup text="," desc="Rename current window" />
      <KeyIconGroup text="&" desc="Kill current window" />
      <KeyIconGroup text="w" desc="List window" />
      <KeyIconGroup text="p" desc="Previous window" />
      <KeyIconGroup text="n" desc="Next window" />
      <KeyIconGroup text="0 - 9" desc="Switch window by number" />
      <KeyIconGroup text="l" desc="Toggle last active window" />

      <p className="text-2xl font-bold">Panes</p>

      <KeyIconGroup text="x" desc="Kill pane" />
      <KeyIconGroup text=";" desc="Toggle last active pane" />
      <KeyIconGroup text="%" desc="Split pane horizontally" />
      <KeyIconGroup text='"' desc="Split pane vertically" />
      <KeyIconGroup text="{" desc="Move current pane left" />
      <KeyIconGroup text="}" desc="Move current pane right" />
    </div>
  );
};
