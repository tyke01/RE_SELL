import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products, Hero, Sell, About, Contact, Categories } from "./pages";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
