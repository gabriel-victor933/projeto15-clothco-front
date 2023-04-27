import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./pages/Cart"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>main</div>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signIn" element={<></>} />
        <Route path="/signUp" element={<></>} />
        <Route path="/checkout" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
