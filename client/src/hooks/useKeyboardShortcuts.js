import { useEffect } from "react";
import { useStudio } from "../context/StudioContext";

export default function useKeyboardShortcuts() {
  const {
    selectedId,
    deleteElement,
    duplicateElement,
    undo,
    redo,
  } = useStudio();

  useEffect(() => {
    const handleKeyDown = (e) => {

      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "z"
      ) {
        e.preventDefault();
        undo();
        return;
      }

      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "y"
      ) {
        e.preventDefault();
        redo();
        return;
      }

      if (!selectedId) return;

      if (e.key === "Delete") {
        deleteElement(selectedId);
      }

      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "d"
      ) {
        e.preventDefault();
        duplicateElement(selectedId);
      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [
    selectedId,
    deleteElement,
    duplicateElement,
    undo,
    redo,
  ]);
}