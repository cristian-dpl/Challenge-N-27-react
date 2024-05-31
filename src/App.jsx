import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import MovieDetail from './MovieDetail';
import Catalogo from './Catalogo';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/catalog">Catalogo</Link></li>
        </ul>
      </nav>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalogo />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
