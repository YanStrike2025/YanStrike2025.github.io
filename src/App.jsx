import { useState } from "react";
import { Header } from "../src/components/Header/Header.jsx";
import { Home } from "./components/Home/Home.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

const App = () => {
  const [contadorCarrito, setcontadorCarrito] = useState(0);

  const sumarCarrito = () => {
    setcontadorCarrito(contadorCarrito + 1);
  };

  const restarCarrito = () => {
    setcontadorCarrito(contadorCarrito - 1);
  };

  return (
    <div className="app">
      <Header contadorCarrito={contadorCarrito} />
      <Home sumarCarrito={sumarCarrito} restarCarrito={restarCarrito} />
      <Footer/>
    </div>
  );
};

export default App;