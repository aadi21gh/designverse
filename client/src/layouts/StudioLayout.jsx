import LayersPanel from "../components/Studio/LayersPanel";
import CanvasHeader from "../components/Studio/CanvasHeader";

function StudioLayout({
  toolbar,
  canvas,
  properties,
  onSave,
  onExport,
}) {
  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-100">

      {/* Toolbar */}
      <aside className="flex w-20 flex-col border-r bg-white">
        {toolbar}
      </aside>

      {/* Center */}
      <section className="flex flex-1 flex-col">

        <CanvasHeader
          onSave={onSave}
          onExport={onExport}
        />

        <div className="flex-1 overflow-hidden">
          {canvas}
        </div>

        <div className="h-64 overflow-auto border-t bg-white">
          <LayersPanel />
        </div>

      </section>

      {/* Properties */}
      <aside className="w-80 overflow-auto border-l bg-white">
        {properties}
      </aside>

    </div>
  );
}

export default StudioLayout;