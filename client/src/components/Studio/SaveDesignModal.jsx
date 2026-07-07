import { useState } from "react";

function SaveDesignModal({
  open,
  initialTitle = "",
  loading = false,
  onClose,
  onSave,
}) {
  const [title, setTitle] = useState(initialTitle);

  if (!open) return null;

  const handleSave = () => {
    const value = title.trim();

    if (!value) return;

    onSave(value);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-[420px] rounded-xl bg-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold">
          Save Design
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Give your design a name.
        </p>

        <input
          className="mt-6 w-full rounded-lg border p-3 outline-none focus:border-black"
          placeholder="My Awesome Design"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={handleSave}
            className="rounded-lg bg-black px-5 py-2 text-white disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default SaveDesignModal;