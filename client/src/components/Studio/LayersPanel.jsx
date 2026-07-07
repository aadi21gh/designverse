import {
  Type,
  Image,
  Square,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import { useStudio } from "../../context/StudioContext";

function LayerIcon({ type }) {
  switch (type) {
    case "text":
      return <Type size={16} />;
    case "image":
      return <Image size={16} />;
    case "rectangle":
      return <Square size={16} />;
    default:
      return null;
  }
}

function LayersPanel() {
  const {
    elements,
    selectedId,
    setSelectedId,
    toggleVisibility,
    toggleLock,
    bringToFront,
    sendToBack,
  } = useStudio();

  const layers = [...elements].reverse();

  return (
    <div className="h-full overflow-auto">

      <div className="sticky top-0 flex items-center justify-between border-b bg-white px-4 py-3">

        <h2 className="font-semibold">
          Layers
        </h2>

        <span className="text-xs text-gray-500">
          {elements.length}
        </span>

      </div>

      {layers.length === 0 && (
        <div className="p-5 text-sm text-gray-400">
          No Layers
        </div>
      )}

      {layers.map((layer) => (
        <div
          key={layer.id}
          className={`border-b

          ${
            selectedId === layer.id
              ? "bg-blue-50"
              : ""
          }`}
        >

          <button
            onClick={() =>
              setSelectedId(layer.id)
            }
            className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-gray-50"
          >

            <LayerIcon type={layer.type} />

            <div className="flex-1">

              <div className="text-sm font-medium truncate">
                {layer.name}
              </div>

              <div className="text-xs text-gray-400">
                {layer.type}
              </div>

            </div>

          </button>

          <div className="flex justify-end gap-2 px-4 pb-3">

            <button
              onClick={() =>
                toggleVisibility(layer.id)
              }
            >
              {layer.visible ? (
                <Eye size={15} />
              ) : (
                <EyeOff size={15} />
              )}
            </button>

            <button
              onClick={() =>
                toggleLock(layer.id)
              }
            >
              {layer.locked ? (
                <Lock size={15} />
              ) : (
                <Unlock size={15} />
              )}
            </button>

            <button
              onClick={() =>
                bringToFront(layer.id)
              }
            >
              <ArrowUp size={15} />
            </button>

            <button
              onClick={() =>
                sendToBack(layer.id)
              }
            >
              <ArrowDown size={15} />
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

export default LayersPanel;