import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import BeerDetailPage from './pages/BeerDetailPage';
import RandomBeersPage from './pages/RandomBeersPage';
import NewBeerPage from './pages/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/beers" element={<AllBeersPage/>} />
        <Route path="/beers/:beersId" element={<BeerDetailPage/>} />
        <Route path="/random-beer" element={<RandomBeersPage/>} />
        <Route path="/new-beer" element={<NewBeerPage/>} />
      </Routes>
    </div>
  );
}

export default App;
