import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/beers" element={<AllBeersPage/>} />
        <Route path="/random-beer" element={<HomePage/>} />
        <Route path="/new-beer" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
