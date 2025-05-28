
// It uses Context API to manage app-wide data: Watchlist, Favorites, Reviews


import  { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState({});
  const [user, setUser] = useState(null);

  // Load user from localStorage once
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);


  useEffect(() => {
    setWatchlist(JSON.parse(localStorage.getItem('watchlist')) || []);
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
    setReviews(JSON.parse(localStorage.getItem('reviews')) || {});
  }, []);

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [watchlist, favorites, reviews]);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.imdbID === movie.imdbID)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const addToFavorites = (movie) => {
    if (!favorites.find((m) => m.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const saveReview = (id, rating, text) => {
    setReviews((prev) => ({ ...prev, [id]: { rating, review: text } }));
  };
  const removeFromWatchlist = (id) => {
  setWatchlist((prev) => prev.filter((m) => m.imdbID !== id));
};

const removeFromFavorites = (id) => {
  setFavorites((prev) => prev.filter((m) => m.imdbID !== id));
};


  return (
    <AppContext.Provider value={{ watchlist, favorites, reviews, addToWatchlist, addToFavorites, saveReview,user, setUser,
  removeFromWatchlist, removeFromFavorites, }}>
      {children}
    </AppContext.Provider>
  );
};
