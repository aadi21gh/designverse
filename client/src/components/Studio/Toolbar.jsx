import {
  Type,
  Image,
  Square,
  Undo2,
  Redo2,
  Trash2,
} from "lucide-react";

import { useStudio } from "../../context/StudioContext";

function Toolbar() {
  const {
    addElement,
    undo,
    redo,
    clearCanvas,
    canUndo,
    canRedo,
  } = useStudio();

  const createId = () => crypto.randomUUID();

  const addText = () =>
    addElement({
      id: createId(),
      type: "text",
      text: "New Text",
      x: 120,
      y: 120,
      fontSize: 32,
      color: "#000",
      rotation: 0,
    });

  const addRectangle = () =>
    addElement({
      id: createId(),
      type: "rectangle",
      x: 120,
      y: 120,
      width: 150,
      height: 120,
      fill: "#ff0000",
      rotation: 0,
    });

  const uploadImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    addElement({
      id: createId(),
      type: "image",
      src: URL.createObjectURL(file),
      x: 120,
      y: 120,
      width: 180,
      height: 180,
      rotation: 0,
    });

    e.target.value = "";
  };

  return (
    <div className="flex flex-col items-center gap-4 py-5">

      <button
        onClick={undo}
        disabled={!canUndo}
        className="rounded-lg p-3 hover:bg-gray-100 disabled:opacity-40"
      >
        <Undo2 size={20} />
      </button>

      <button
        onClick={redo}
        disabled={!canRedo}
        className="rounded-lg p-3 hover:bg-gray-100 disabled:opacity-40"
      >
        <Redo2 size={20} />
      </button>

      <button
        onClick={addText}
        className="rounded-lg p-3 hover:bg-gray-100"
      >
        <Type size={20} />
      </button>

      <label className="cursor-pointer rounded-lg p-3 hover:bg-gray-100">
        <Image size={20} />

        <input
          hidden
          type="file"
          accept="image/*"
          onChange={uploadImage}
        />
      </label>

      <button
        onClick={addRectangle}
        className="rounded-lg p-3 hover:bg-gray-100"
      >
        <Square size={20} />
      </button>

      <button
        onClick={clearCanvas}
        className="mt-6 rounded-lg p-3 text-red-600 hover:bg-red-50"
      >
        <Trash2 size={20} />
      </button>

    </div>
  );
}

export default Toolbar;