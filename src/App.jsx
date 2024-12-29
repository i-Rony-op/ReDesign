import React from "react";
import Navbar from "./components/navbar/Navbar";
import Stripes from "./components/stripes/Stripes";
import Products from "./components/products/Products";
import Marquees from "./components/marquees/Marquees";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Design from "./components/hero/Design";

import { ReactLenis, useLenis } from "lenis/react";

const App = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <div className="w-full bg-zinc-900 text-white">
        <Navbar />
        <Design />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default App;
