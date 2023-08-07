import { KeyIcon } from "@/components/key-icon";

export const TmuxCheatsheet: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-2xl font-bold">Session</p>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="$tmux" />
        <p className="text-xs md:text-sm">New session</p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="$tmux new -s {name}" />
        <p className="text-xs md:text-sm">New session with name</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="$tmux kill-ses -t {name}" />
        <p className="text-xs md:text-sm">Kill name session</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="s" />
        <p className="text-xs md:text-sm">Show all sessions</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="$" />
        <p className="text-xs md:text-sm">Rename session</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="w" />
        <p className="text-xs md:text-sm">Session and Window Preview</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="(" />
        <p className="text-xs md:text-sm">Move to previous session</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text=")" />
        <p className="text-xs md:text-sm">Move to next session</p>
      </div>

      <p className="text-2xl font-bold">Window</p>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="c" />
        <p className="text-xs md:text-sm">Create new window</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="," />
        <p className="text-xs md:text-sm">Rename current window</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="&" />
        <p className="text-xs md:text-sm">Close current window</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="w" />
        <p className="text-xs md:text-sm">List windows</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="p" />
        <p className="text-xs md:text-sm">Previous window</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="n" />
        <p className="text-xs md:text-sm">Next windows</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="0 - 9" />
        <p className="text-xs md:text-sm">Switch/select window by number</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="l" />
        <p className="text-xs md:text-sm">Toogle last active window</p>
      </div>

      <p className="text-2xl font-bold">Panes</p>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="x" />
        <p className="text-xs md:text-sm">Kill pane</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text=";" />
        <p className="text-xs md:text-sm">Toggle last active pane</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="%" />
        <p className="text-xs md:text-sm">Split pane horizontally</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text='"' />
        <p className="text-xs md:text-sm">Split pane vertically</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="{" />
        <p className="text-xs md:text-sm">Move current pane left</p>
      </div>

      <div className="flex flex-row items-center gap-4">
        <KeyIcon text="}" />
        <p className="text-xs md:text-sm">Move current pane right</p>
      </div>
    </div>
  );
};
