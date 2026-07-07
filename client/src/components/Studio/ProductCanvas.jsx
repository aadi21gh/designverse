import { Stage, Layer } from "react-konva";

import { useStudio } from "../../context/StudioContext";
import ElementRenderer from "./ElementRenderer";
import SelectionTransformer from "./SelectionTransformer";

function ProductCanvas({ product }) {
  const {
    elements,
    setSelectedId,
  } = useStudio();

  return (
    <div className="flex h-full items-center justify-center bg-gray-200">

      <div className="relative rounded-lg bg-white p-5 shadow-xl">

        <img
          src={product.image}
          alt={product.name}
          className="pointer-events-none select-none h-[600px] w-[450px] object-contain"
        />

        <Stage
          width={450}
          height={600}
          className="absolute left-5 top-5"
          onMouseDown={(e) => {
            if (e.target === e.target.getStage()) {
              setSelectedId(null);
            }
          }}
        >
          <Layer>

            {elements.map((element) => (
              <ElementRenderer
                key={element.id}
                element={element}
              />
            ))}

            <SelectionTransformer />

          </Layer>

        </Stage>

      </div>

    </div>
  );
}

export default ProductCanvas;