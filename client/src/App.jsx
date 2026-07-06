import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Customize from "./pages/Customize";
import Explore from "./pages/Explore";
import Artwork from "./pages/Artwork";
import Clothing from "./pages/Clothing";
import Accessories from "./pages/Accessories";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customize"
        element={
          <ProtectedRoute>
            <Customize />
          </ProtectedRoute>
        }
      />

      <Route
        path="/artwork"
        element={
          <ProtectedRoute>
            <Artwork />
          </ProtectedRoute>
        }
      />

      <Route
        path="/clothing"
        element={
          <ProtectedRoute>
            <Clothing />
          </ProtectedRoute>
        }
      />

      <Route
        path="/accessories"
        element={
          <ProtectedRoute>
            <Accessories />
          </ProtectedRoute>
        }
      />

      <Route
        path="/product/:id"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />

      <Route
        path="/explore"
        element={
          <ProtectedRoute>
            <Explore />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;