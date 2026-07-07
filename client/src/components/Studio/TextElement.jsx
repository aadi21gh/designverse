import { Text } from "react-konva";
import { useStudio } from "../../context/StudioContext";

function TextElement({ element }) {
  const { updateElement, setSelectedId } = useStudio();

  return (
    <Text
      id={element.id}
      text={element.text}
      x={element.x}
      y={element.y}
      fontSize={element.fontSize}
      fontFamily={element.fontFamily || "Arial"}
      fill={element.color}
      rotation={element.rotation}
      opacity={element.opacity ?? 1}
      visible={element.visible !== false}
      draggable={!element.locked}
      listening={element.visible !== false}
      perfectDrawEnabled={false}
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

        const scaleX = node.scaleX();

        updateElement(element.id, {
          x: node.x(),
          y: node.y(),
          rotation: node.rotation(),
          fontSize: Math.max(
            12,
            element.fontSize * scaleX
          ),
        });

        node.scaleX(1);
        node.scaleY(1);
      }}
    />
  );
}

export default TextElement;