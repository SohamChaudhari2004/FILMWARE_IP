import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="movies/:type" element={<MovieList />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/*" element={<h1>Error Page</h1>} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
  