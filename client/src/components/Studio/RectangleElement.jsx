import { Rect } from "react-konva";
import { useStudio } from "../../context/StudioContext";

function RectangleElement({ element }) {
  const {
    updateElement,
    setSelectedId,
  } = useStudio();

  return (
    <Rect
      id={element.id}
      x={element.x}
      y={element.y}
      width={element.width}
      height={element.height}
      fill={element.fill}
      rotation={element.rotation}
      opacity={element.opacity ?? 1}
      visible={element.visible !== false}
      draggable={!element.locked}
      listening={element.visible !== false}
      onClick={() => setSelectedId(element.id)}
      onTap={() => setSelectedId(element.id)}
      onDragEnd={(e) =>
        updateElement(element.id, {
          x: e.target.x(),
          y: e.target.y(),
        })
      }
      onTransformEnd={(e) => {
        const node = e.target;

        updateElement(element.id, {
          x: node.x(),
          y: node.y(),
          width: node.width() * node.scaleX(),
          height: node.height() * node.scaleY(),
          rotation: node.rotation(),
        });

        node.scaleX(1);
        node.scaleY(1);
      }}
    />
  );
}

export default RectangleElement;