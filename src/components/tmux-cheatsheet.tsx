import { KeyIcon } from "@/components/key-icon";

export const TmuxCheatsheet: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-2xl font-bold">Session</p>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="$tmux" />
        <p className="text-lg">new session</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="$tmux new -s {name}" />
        <p className="text-lg">new session with name</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="$tmux kill-ses -t {name}" />
        <p className="text-lg">Kill name session</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="s" />
        <p className="text-lg">Show all sessions</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="$" />
        <p className="text-lg">Rename session</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="w" />
        <p className="text-lg">Session and Window Preview</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="(" />
        <p className="text-lg">Move to previous session</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text=")" />
        <p className="text-lg">Move to next session</p>
      </div>

      <p className="text-2xl font-bold">Window</p>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="c" />
        <p className="text-lg">create new window</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="," />
        <p className="text-lg">Rename current window</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="&" />
        <p className="text-lg">Close current window</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="w" />
        <p className="text-lg">List windows</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="p" />
        <p className="text-lg">Previous window</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="n" />
        <p className="text-lg">Next windows</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="0 - 9" />
        <p className="text-lg">Switch/select window by number</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="l" />
        <p className="text-lg">Toogle last active window</p>
      </div>

      <p className="text-2xl font-bold">Panes</p>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="x" />
        <p className="text-lg">Kill pane</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text=";" />
        <p className="text-lg">Toggle last active pane</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="%" />
        <p className="text-lg">Split pane horizontally</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text='"' />
        <p className="text-lg">Split pane vertically</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="{" />
        <p className="text-lg">Move current pane left</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="}" />
        <p className="text-lg">Move current pane right</p>
      </div>
    </div>
  );
};
