import React from "react";
import Carousel from "./components/Carousel/carousel";
import Nav from "./components/Header/NavBar";
import Productos from "./components/Productos/Productos";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Nav />
        <Carousel />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Productos/>} />
          <Route path="/productos/:id" element={<ItemDetail/>} />
        </Routes>
      </section>
    </div>
  </BrowserRouter>
  );
}

export default App;
