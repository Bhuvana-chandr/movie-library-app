
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchResults from './pages/SearchResults';
import MovieDetail from './pages/MovieDetail';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/dashboard" element={ <ProtectedRoute><Dashboard /> </ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default App;