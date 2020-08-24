import React from 'react';
import './main.scss';
import NavBar from './Components/Nav_bar/NavBar';
import Carousel from './Components/Carousel/Carousel';
import DietComponents from './Components/Diet_components/DietComponents';
import Parallax from './Components/Parallax/Parallax';


const App = () => (
  <>
  <NavBar />
  <Carousel />
  <DietComponents />
  <Parallax />
  </>
)

export default App;
