export const TmuxCheatsheet: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">
      <p>tmux new -s {"<session name>"} - create new session</p>
      <p>tmux ls - list sessions</p>
      <p>tmux a -t {"<session name>"} - attach to session</p>
      <p>tmux kill-session -t {"<session name>"} - kill session</p>
      <p>tmux kill-server - kill all sessions</p>
      <p>Ctrl + Space - prefix</p>
      <p>Ctrl + Space + c - create new window</p>
      <p>Ctrl + Space + n - next window</p>
      <p>Ctrl + Space + p - previous window</p>
      <p>Ctrl + Space + w - list windows</p>
      <p>Ctrl + Space + , - rename window</p>
      <p>Ctrl + Space + & - kill window</p>
      <p>Ctrl + Space + % - split window vertically</p>
      <p>Ctrl + Space + &quot; - split window horizontally</p>
      <p>Ctrl + Space + o - swap panes</p>
      <p>Ctrl + Space + ; - toggle between current and previous pane</p>
      <p>Ctrl + Space + x - kill pane</p>
      <p>Ctrl + Space + {"{"} - move pane left</p>
      <p>Ctrl + Space + {"}"} - move pane right</p>
      <p>Ctrl + Space + z - toggle pane zoom</p>
      <p>Ctrl + Space + {"<arrow>"} - resize pane</p>
      <p>Ctrl + Space + d - detach from session</p>
      <p>Ctrl + Space + s - list sessions</p>
    </div>
  );
};
