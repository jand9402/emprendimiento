import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;