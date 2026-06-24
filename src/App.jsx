import { Routes, Route } from "react-router-dom"

import Register from "./pages/Register"
import Categories from "./pages/Categories"
import Dashboard from "./pages/Dashboard"
import Movies from "./pages/Movies"
import NotFound from "./pages/NotFound"

const App = () => (
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App
