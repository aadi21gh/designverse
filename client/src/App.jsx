import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Customize from "./pages/Customize";
import Explore from "./pages/Explore";
import Artwork from "./pages/Artwork";
import Clothing from "./pages/Clothing";
import Accessories from "./pages/Accessories";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/customize" element={<Customize />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/artwork" element={<Artwork />} />
      <Route path="/clothing" element={<Clothing />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;