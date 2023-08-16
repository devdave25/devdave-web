import React from "react";
import { Tab } from "./tab";
import { KeyIcon, KeyIconGroup } from "@/components/key-icon";
import { ArrowDownIcon, ArrowUpIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const VimCheatsheet: React.FC = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-2">
        <Tab label="General" active={tab === 0} onClick={() => setTab(0)} />
        <Tab label="LSP" active={tab === 1} onClick={() => setTab(1)} />
        <Tab label="Telescope" active={tab === 2} onClick={() => setTab(2)} />
        <Tab label="Trouble" active={tab === 3} onClick={() => setTab(3)} />
        <Tab label="Other" active={tab === 4} onClick={() => setTab(4)} />
        <Tab label="Misc" active={tab === 5} onClick={() => setTab(5)} />
      </div>

      {tab === 0 && <VimGeneral />}
      {tab === 1 && <VimLsp />}
      {tab === 2 && <VimTelescope />}
      {tab === 3 && <VimTrouble />}
      {tab === 4 && <VimOther />}
      {tab === 5 && <VimMisc />}
    </div>
  );
};

export const VimGeneral: React.FC = () => {
  return (
    <div className="flex flex-col gap-1">

      <div className="flex flex-row justify-between gap-4 px-2 mt-4">
        <div className="flex flex-row gap-3 items-center">
          <KeyIcon text="h" />
          <ArrowLeftIcon className="w-4 h-4" />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <KeyIcon text="j" />
          <ArrowDownIcon className="w-4 h-4" />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <KeyIcon text="k" />
          <ArrowUpIcon className="w-4 h-4" />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <KeyIcon text="l" />
          <ArrowRightIcon className="w-4 h-4" />
        </div>
      </div>


    </div>
  );
};

export const VimLsp: React.FC = () => {
  return <div>
    <p className="text-2xl font-bold">Lsp keys</p>
    <KeyIconGroup text="K" desc="Displays hover information about the symbol under the cursor in a floating window." />
    <KeyIconGroup text="gd" desc="Jumps to the definition of the symbol under the cursor." />
    <KeyIconGroup text="gD" desc="Jumps to the declaration of the symbol under the cursor." />
    <KeyIconGroup text="gi" desc="Lists all the implementations for the symbol under the cursor in the quickfix window." />
    <KeyIconGroup text="go" desc="Jumps to the definition of the type of the symbol under the cursor." />
    <KeyIconGroup text="gr" desc="Lists all the references to the symbol under the cursor in the quickfix window." />
    <KeyIconGroup text="gs" desc="Displays signature information about the symbol under the cursor in a floating window." />
    <KeyIconGroup text="<F2>" desc="Renames all references to the symbol under the cursor." />
    <KeyIconGroup text="<F3>" desc="Format code in current buffer." />
    <KeyIconGroup text="<F4>" desc="Selects a code action available at the current cursor position." />
    <KeyIconGroup text="gl" desc="Show diagnostics in a floating window." />
    <KeyIconGroup text="[d" desc="Move to the previous diagnostic in the current buffer." />
    <KeyIconGroup text="]d" desc="Move to the next diagnostic." />
    <p className="text-2xl font-bold">Autocomplete keys</p>
    <KeyIconGroup text="<Ctrl-y>" desc="Confirms selection." />
    <KeyIconGroup text="<Ctrl-e>" desc="Cancel completion." />
    <KeyIconGroup text="<Down>" desc="Navigate to the next item on the list." />
    <KeyIconGroup text="<Up>" desc="Navigate to previous item on the list." />
    <KeyIconGroup text="<Ctrl-n>" desc="If the completion menu is visible, go to the next item. Else, trigger completion menu." />
    <KeyIconGroup text="<Ctrl-p>" desc="If the completion menu is visible, go to the previous item. Else, trigger completion menu." />
    <KeyIconGroup text="<Ctrl-d>" desc="Scroll down the documentation window." />
    <KeyIconGroup text="<Ctrl-u>" desc="Scroll up the documentation window." />
    <p>more?</p>
  </div>;
}

export const VimTelescope: React.FC = () => {
  return <div>
    <p className="text-2xl font-bold">Action keys</p>
    <KeyIconGroup text="<C-n>" desc="Next item" />
    <KeyIconGroup text="<C-p>" desc="Previous item" />
    <KeyIconGroup text="j/k" desc="Next/previous (in normal mode)" />
    <KeyIconGroup text="H/M/L" desc="Select High/Middle/Low (in normal mode)" />
    <KeyIconGroup text="gg/G" desc="Select the first/last item (in normal mode)" />
    <KeyIconGroup text="<CR>" desc="Confirm selection" />
    <KeyIconGroup text="<C-x>" desc="Go to file selection as a split" />
    <KeyIconGroup text="<C-v>" desc="Go to file selection as a vsplit" />
    <KeyIconGroup text="<C-t>" desc="Go to a file in a new tab" />
    <KeyIconGroup text="<C-u>" desc="Scroll up in preview window" />
    <KeyIconGroup text="<C-d>" desc="Scroll down in preview window" />
    <KeyIconGroup text="<C-f>" desc="Scroll left in preview window" />
    <KeyIconGroup text="<C-k>" desc="Scroll right in preview window" />
    <KeyIconGroup text="<M-f>" desc="Scroll left in results window" />
    <KeyIconGroup text="<M-k>" desc="Scroll right in results window" />
    <KeyIconGroup text={"<C-/>"} desc="Show mappings for picker actions (insert mode)" />
    <KeyIconGroup text="?" desc="Show mappings for picker actions (normal mode)" />
    <KeyIconGroup text="<C-c>" desc="Close telescope" />
    <KeyIconGroup text="<Esc>" desc="Close telescope (in normal mode)" />
    <KeyIconGroup text="<Tab>" desc="Toggle selection and move to next selection" />
    <KeyIconGroup text="<S-Tab>" desc="Toggle selection and move to prev selection" />
    <KeyIconGroup text="<C-q>" desc="Send all items not filtered to quickfixlist (qflist)" />
    <KeyIconGroup text="<M-q>" desc="Send all selected items to qflist" />
  </div>;
}

export const VimTrouble: React.FC = () => {
  return <div className="flex flex-col gap-1">
    <p className="text-2xl font-bold">Action keys</p>
    <KeyIconGroup text="o" desc="Jump to diagnostic and close" />
    <KeyIconGroup text="k" desc="Previous item" />
    <KeyIconGroup text="j" desc="Next item" />
    <KeyIconGroup text="m" desc="Toggle workspace/document diagnostics" />
    <KeyIconGroup text="r" desc="Refresh" />
    <KeyIconGroup text="?" desc="Help" />
    <KeyIconGroup text="q" desc="Close" />
    <KeyIconGroup text="s" desc="Switch severity filter" />
    <KeyIconGroup text="c" desc="Open code href" />
    <KeyIconGroup text="p" desc="Preview diagnostic location" />
    <KeyIconGroup text="P" desc="Toggle auto preview" />
    <KeyIconGroup text="K" desc="Open small popup message" />
    <KeyIconGroup text="<esc>" desc="Close preview" />
    <KeyIconGroup text="<tab>" desc="Jump to diagnostic" />
    <KeyIconGroup text="<c-x>" desc="Open buffer in new split" />
    <KeyIconGroup text="<c-v>" desc="Open buffer in new vsplit" />
    <KeyIconGroup text="<c-t>" desc="Open buffer in new tab" />
    <KeyIconGroup text="zm" desc="Close folds" />
    <KeyIconGroup text="zr" desc="Open folds" />
    <KeyIconGroup text="za" desc="Toggle fold" />
  </div>;
}

export const VimOther: React.FC = () => {
  return <div>Other</div>;
}

export const VimMisc: React.FC = () => {
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


