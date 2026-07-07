import useKeyboardShortcuts from "../../hooks/useKeyboardShortcuts";
import Toolbar from "./Toolbar";
import ProductCanvas from "./ProductCanvas";
import PropertiesPanel from "./PropertiesPanel";
import StudioLayout from "../../layouts/StudioLayout";

function StudioEditor({ product }) {
  useKeyboardShortcuts();

  return (
    <StudioLayout
      toolbar={<Toolbar />}
      canvas={<ProductCanvas product={product} />}
      properties={<PropertiesPanel />}
    />
  );
}

export default StudioEditor;