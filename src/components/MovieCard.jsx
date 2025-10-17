
import React from 'react';

function MovieCard({ movie, isLiked = false, onToggleLike }) {
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    original_language,
  } = movie;

  const handleLike = () => {
    onToggleLike(movie);
  };

  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : '/No-Poster.png'
        }
        alt={title}
      />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="./Vector.svg" alt="Star Icon" />
            <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>
          <span>•</span>
          <p className="lang">{original_language}</p>
          <span>•</span>
          <p className="year">
            {release_date ? release_date.split('-')[0] : 'N/A'}
          </p>
        </div>

        {/* Like / Unlike button */}
        <button
          onClick={handleLike}
          className={`mt-4 px-4 py-2 rounded-lg transition duration-300 ${
            isLiked
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-light-200 hover:bg-light-100 text-black'
          }`}
        >
          {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
