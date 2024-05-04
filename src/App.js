import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Watchlist from './watchlist';
import Login from './login';
import Register from './register';
import MovieDetail from './moviedetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
