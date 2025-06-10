import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "../src/Components/About"
import Registration from "../src/Components/Registeration"

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/reg" element={<Registration/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
