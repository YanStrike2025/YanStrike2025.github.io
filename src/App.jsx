import { useState } from "react";
import { Header } from "../src/components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";

const App = () => {
  const [contadorCarrito, setcontadorCarrito] = useState(0);

  const agregarCarrito = () => {
    setcontadorCarrito(contadorCarrito + 1);
  };

  return (
    <div className="app">
      <Header contadorCarrito={contadorCarrito} />
      <Home agregarCarrito={agregarCarrito} />
    </div>
  );
};

export default App;