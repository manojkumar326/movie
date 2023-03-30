
import './App.css'; 
import Header from './components/header/Header';
import Home from './pages/home/home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieList from './components/movieList/movieList';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
      <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<MovieList />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
