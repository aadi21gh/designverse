import { useEffect, useRef } from "react";
import { Canvas, FabricImage, Textbox } from "fabric";
import Toolbar from "./Toolbar";

function StudioCanvas() {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);

  const history = useRef([]);
  const redoHistory = useRef([]);

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current, {
      width: 900,
      height: 600,
      backgroundColor: "#ffffff",
      preserveObjectStacking: true,
    });

    fabricRef.current = canvas;

    saveState();

    canvas.on("object:added", saveState);
    canvas.on("object:modified", saveState);
    canvas.on("object:removed", saveState);

    return () => canvas.dispose();
  }, []);

  const saveState = () => {
    if (!fabricRef.current) return;

    history.current.push(
      JSON.stringify(fabricRef.current.toJSON())
    );

    if (history.current.length > 50) {
      history.current.shift();
    }
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = async () => {
      const image = await FabricImage.fromURL(reader.result);

      image.scaleToWidth(300);

      image.set({
        left: 100,
        top: 100,
      });

      fabricRef.current.add(image);
      fabricRef.current.setActiveObject(image);
    };

    reader.readAsDataURL(file);
  };

  const addText = () => {
    const text = new Textbox("Edit Me", {
      left: 150,
      top: 120,
      fontSize: 32,
      fill: "#000",
    });

    fabricRef.current.add(text);
    fabricRef.current.setActiveObject(text);
  };

  const deleteObject = () => {
    const active = fabricRef.current.getActiveObject();

    if (!active) return;

    fabricRef.current.remove(active);
  };

  const undo = async () => {
    if (history.current.length < 2) return;

    const current = history.current.pop();

    redoHistory.current.push(current);

    const previous = history.current[history.current.length - 1];

    await fabricRef.current.loadFromJSON(previous);

    fabricRef.current.renderAll();
  };

  const redo = async () => {
    if (!redoHistory.current.length) return;

    const state = redoHistory.current.pop();

    history.current.push(state);

    await fabricRef.current.loadFromJSON(state);

    fabricRef.current.renderAll();
  };

  const exportPNG = () => {
    const url = fabricRef.current.toDataURL({
      format: "png",
      quality: 1,
    });

    const a = document.createElement("a");

    a.href = url;
    a.download = "design.png";
    a.click();
  };

  return (
    <>
      <Toolbar
        onUpload={uploadImage}
        onAddText={addText}
        onDelete={deleteObject}
        onUndo={undo}
        onRedo={redo}
        onExport={exportPNG}
      />

      <canvas
        ref={canvasRef}
        className="border rounded-xl"
      />
    </>
  );
}

export default StudioCanvas;