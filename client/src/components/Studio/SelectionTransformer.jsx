import { useEffect, useRef } from "react";
import { Transformer } from "react-konva";
import { useStudio } from "../../context/StudioContext";

function SelectionTransformer() {
  const transformerRef = useRef();

  const {
    selectedId,
    selectedElement,
  } = useStudio();

  useEffect(() => {
    const transformer = transformerRef.current;

    if (!transformer) return;

    const stage = transformer.getStage();

    if (!selectedId || !selectedElement) {
      transformer.nodes([]);
      transformer.getLayer()?.batchDraw();
      return;
    }

    if (selectedElement.locked) {
      transformer.nodes([]);
      transformer.getLayer()?.batchDraw();
      return;
    }

    const node = stage.findOne(`#${selectedId}`);

    if (!node) {
      transformer.nodes([]);
      transformer.getLayer()?.batchDraw();
      return;
    }

    transformer.nodes([node]);
    transformer.getLayer()?.batchDraw();

  }, [selectedId, selectedElement]);

  return (
    <Transformer
      ref={transformerRef}
      rotateEnabled
      keepRatio={false}
      enabledAnchors={[
        "top-left",
        "top-center",
        "top-right",
        "middle-left",
        "middle-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ]}
    />
  );
}

export default SelectionTransformer;