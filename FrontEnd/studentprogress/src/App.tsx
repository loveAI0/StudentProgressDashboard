import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "../src/Components/About"
import Registration from "../src/Components/Registeration"
import AboutUs from './Components/AboutUs';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/reg" element={<Registration/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
