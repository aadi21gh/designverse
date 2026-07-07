import { Image } from "react-konva";
import useImage from "use-image";
import { useStudio } from "../../context/StudioContext";

function ImageElement({ element }) {
  const [image] = useImage(element.src);

  const {
    updateElement,
    setSelectedId,
  } = useStudio();

  if (!image) return null;

  return (
    <Image
      id={element.id}
      image={image}
      x={element.x}
      y={element.y}
      width={element.width}
      height={element.height}
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

export default ImageElement;