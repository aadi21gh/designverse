import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../services/productService";

import Toolbar from "../components/Studio/Toolbar";
import StudioLayout from "../layouts/StudioLayout";
import PropertiesPanel from "../components/Studio/PropertiesPanel";
import ProductCanvas from "../components/Studio/ProductCanvas";
import { StudioProvider } from "../context/StudioContext";
import StudioEditor from "../components/Studio/StudioEditor";

function DesignStudio() {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function load() {
      const res = await getProductById(productId);
      setProduct(res.data);
    }

    load();
  }, [productId]);

  if (!product)
    return (
      <div className="p-10">
        Loading...
      </div>
    );

  return (
  <StudioProvider>
    <StudioEditor product={product} />
    <StudioLayout
  toolbar={<Toolbar />}
  canvas={<ProductCanvas product={product} />}
  properties={<PropertiesPanel />}
  onSave={() => {
    console.log("Save Design");
  }}
  onExport={() => {
    console.log("Export PNG");
  }}
/>
  </StudioProvider>
);
}

export default DesignStudio;