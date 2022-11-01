import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header';
import Movie from './Movie';
import Tv from './Tv';
import List from './List';
import Detail from '../Components/Detail';
import Favourites from './Favourites'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Movie />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/list" element={<List />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/favourite" element={<Favourites />} />
        </Routes>
    </Router>
  );
}

export default App;
