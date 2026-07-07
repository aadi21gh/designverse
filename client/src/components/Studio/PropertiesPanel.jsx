import { useStudio } from "../../context/StudioContext";

function PropertiesPanel() {
  const {
    selectedElement,
    updateElement,
    deleteElement,
    duplicateElement,
    toggleVisibility,
    toggleLock,
  } = useStudio();

  if (!selectedElement) {
    return (
      <div className="p-6 text-gray-500">
        Select an element
      </div>
    );
  }

  const update = (updates) =>
    updateElement(selectedElement.id, updates);

  return (
    <div className="space-y-5 p-5">

      <h2 className="text-lg font-bold">
        Properties
      </h2>

      {/* COMMON */}

      <div>
        <label className="mb-2 block">X</label>

        <input
          type="number"
          className="w-full rounded border p-2"
          value={selectedElement.x}
          onChange={(e) =>
            update({
              x: Number(e.target.value),
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block">Y</label>

        <input
          type="number"
          className="w-full rounded border p-2"
          value={selectedElement.y}
          onChange={(e) =>
            update({
              y: Number(e.target.value),
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block">
          Rotation
        </label>

        <input
          type="range"
          min="0"
          max="360"
          value={selectedElement.rotation}
          onChange={(e) =>
            update({
              rotation: Number(e.target.value),
            })
          }
        />
      </div>

      <div>
        <label className="mb-2 block">
          Opacity
        </label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={selectedElement.opacity}
          onChange={(e) =>
            update({
              opacity: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-3">

        <button
          onClick={() =>
            toggleVisibility(selectedElement.id)
          }
          className="rounded bg-gray-100 py-2"
        >
          {selectedElement.visible
            ? "Hide"
            : "Show"}
        </button>

        <button
          onClick={() =>
            toggleLock(selectedElement.id)
          }
          className="rounded bg-gray-100 py-2"
        >
          {selectedElement.locked
            ? "Unlock"
            : "Lock"}
        </button>

      </div>

      {/* TEXT */}

      {selectedElement.type === "text" && (
        <>
          <div>
            <label className="mb-2 block">
              Text
            </label>

            <input
              className="w-full rounded border p-2"
              value={selectedElement.text}
              onChange={(e) =>
                update({
                  text: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="mb-2 block">
              Color
            </label>

            <input
              type="color"
              value={selectedElement.color}
              onChange={(e) =>
                update({
                  color: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="mb-2 block">
              Font Size
            </label>

            <input
              type="range"
              min="10"
              max="120"
              value={selectedElement.fontSize}
              onChange={(e) =>
                update({
                  fontSize: Number(
                    e.target.value
                  ),
                })
              }
            />
          </div>
        </>
      )}

      {/* RECTANGLE */}

      {selectedElement.type === "rectangle" && (
        <>
          <div>
            <label className="mb-2 block">
              Fill
            </label>

            <input
              type="color"
              value={selectedElement.fill}
              onChange={(e) =>
                update({
                  fill: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="mb-2 block">
              Width
            </label>

            <input
              type="number"
              value={selectedElement.width}
              onChange={(e) =>
                update({
                  width: Number(
                    e.target.value
                  ),
                })
              }
            />
          </div>

          <div>
            <label className="mb-2 block">
              Height
            </label>

            <input
              type="number"
              value={selectedElement.height}
              onChange={(e) =>
                update({
                  height: Number(
                    e.target.value
                  ),
                })
              }
            />
          </div>
        </>
      )}

      {/* IMAGE */}

      {selectedElement.type === "image" && (
        <>
          <div>
            <label className="mb-2 block">
              Width
            </label>

            <input
              type="number"
              value={selectedElement.width}
              onChange={(e) =>
                update({
                  width: Number(
                    e.target.value
                  ),
                })
              }
            />
          </div>

          <div>
            <label className="mb-2 block">
              Height
            </label>

            <input
              type="number"
              value={selectedElement.height}
              onChange={(e) =>
                update({
                  height: Number(
                    e.target.value
                  ),
                })
              }
            />
          </div>
        </>
      )}

      <button
        onClick={() =>
          duplicateElement(selectedElement.id)
        }
        className="w-full rounded bg-blue-600 py-2 text-white"
      >
        Duplicate
      </button>

      <button
        onClick={() =>
          deleteElement(selectedElement.id)
        }
        className="w-full rounded bg-red-600 py-2 text-white"
      >
        Delete
      </button>

    </div>
  );
}

export default PropertiesPanel;