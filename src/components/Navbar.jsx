import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { user, setUser } = useContext(AppContext);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null); // ✅ Trigger re-render
    window.location.reload();
    
  };

  return (
    <nav className={user ? 'navbar-items logged-in' : 'navbar-items logged-out'}>
      {user ? (
        <>
          <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{' '}
          <span>Welcome, {user.email}</span>{' '}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
