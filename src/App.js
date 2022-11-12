import { Route, Routes } from "react-router";
import "./App.css";
import Menu from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" />
        <Route path="/about-us" />
        <Route path="/contact-us" />
      </Routes>
    </div>
  );
}

export default App;
