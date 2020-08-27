import React from "react";
import "./main.scss";
import NavBar from "./Components/Nav_bar/NavBar";
import Carousel from "./Components/Carousel/Carousel";
import DietComponents from "./Components/Diet_components/DietComponents";
import Parallax from "./Components/Parallax/Parallax";
import Calculator from "./Components/Calculator/Calculator";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => (
  <>
    <NavBar />
    <Carousel />
    <DietComponents />
    <Parallax />
    <Calculator />
    <Contact />
    <Footer />
  </>
);

export default App;
