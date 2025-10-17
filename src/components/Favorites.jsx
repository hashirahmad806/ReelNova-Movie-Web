





import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleToggleFavorite = (movie) => {
    const exists = favorites.some((fav) => fav.id === movie.id);
    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <h2 className="mb-6 text-white text-3xl font-bold text-center">
          Your Favorite Movies
        </h2>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-100 text-lg">
            You haven't liked any movies yet.
          </p>
        ) : (
          <section className="all-movies">
            <ul>
              {favorites.map((movie) => (
                <li key={movie.id}>
                  <MovieCard
                    movie={movie}
                    isLiked={true}
                    onToggleLike={handleToggleFavorite}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

export default Favorites;
