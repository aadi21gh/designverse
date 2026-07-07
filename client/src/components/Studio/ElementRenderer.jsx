import TextElement from "./TextElement";
import ImageElement from "./ImageElement";
import RectangleElement from "./RectangleElement";

function ElementRenderer({ element }) {
  if (!element.visible) return null;

  switch (element.type) {
    case "text":
      return <TextElement element={element} />;

    case "image":
      return <ImageElement element={element} />;

    case "rectangle":
      return <RectangleElement element={element} />;

    default:
      return null;
  }
}

export default ElementRenderer;