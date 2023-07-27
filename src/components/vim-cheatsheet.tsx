export const VimCheatsheet: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <p></p>
      <p>:e {"<path>"} - edit</p>
      <p>:w - save</p>
      <p>:q - quit</p>
      <p>:qa - quit all</p>

      <p>u - undo</p>
      <p>0 - start line</p>
      <p>$ - end line</p>
      <p>
        {"<action>"}i{"<letter>"} - inside
      </p>
      <p>{"vi) - select everything inside )"}</p>
      <p>{"<action>a<letter> - all va) - select all including )"}</p>

      <p>z - Centre active line </p>

      <p>Visual Block</p>

      <p>Ctrl + V - Make multi-line visual</p>
      <p>I or A - Use uppercase letters to insert or append etc</p>

      <p>Split screen</p>

      <p>sp - Split</p>
      <p>vsp - Vertical split</p>

      <p>
        {
          "space <nav letter> - move between split screens (space is leader letter)"
        }
      </p>

      <p>Registry / Copy paste (* is clipboard)</p>

      <p>{"“<letter><action>"}</p>
      <p>“wy - copy to registry w</p>
      <p>“wp - paste registry w</p>

      <p>Macros</p>

      <p>{"q<letter> - start macro record"}</p>
      <p>{"<Esc> q - to end record"}</p>

      <p>{"@<letter>"}</p>

      <p>Search</p>

      <p>/ - search forward</p>
      <p>? - search backward</p>
      <p>n - next occurrence</p>
      <p>N - previous occurrence</p>
    </div>
  );
};
