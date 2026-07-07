import {
  Undo2,
  Redo2,
  Download,
  Save,
} from "lucide-react";

import { useStudio } from "../../context/StudioContext";

function CanvasHeader({
  onExport,
  onSave,
}) {
  const {
    undo,
    redo,
    canUndo,
    canRedo,
  } = useStudio();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      <div>

        <h1 className="text-lg font-semibold">
          Design Studio
        </h1>

        <p className="text-sm text-gray-500">
          Customize your product
        </p>

      </div>

      <div className="flex items-center gap-2">

        <button
          disabled={!canUndo}
          onClick={undo}
          className="rounded-lg border p-2 hover:bg-gray-100 disabled:opacity-40"
        >
          <Undo2 size={18} />
        </button>

        <button
          disabled={!canRedo}
          onClick={redo}
          className="rounded-lg border p-2 hover:bg-gray-100 disabled:opacity-40"
        >
          <Redo2 size={18} />
        </button>

        <button
          onClick={onSave}
          className="rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          <div className="flex items-center gap-2">
            <Save size={18} />
            Save
          </div>
        </button>

        <button
          onClick={onExport}
          className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        >
          <div className="flex items-center gap-2">
            <Download size={18} />
            Export
          </div>
        </button>

      </div>

    </header>
  );
}

export default CanvasHeader;