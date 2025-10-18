// import { use, useLayoutEffect, useState } from 'react'
// import './App.css'
// import Search from './components/Search.jsx'
// import Spinner from './components/Spinner.jsx'
// import { useEffect} from 'react';
// import MovieCard from './components/MovieCard.jsx';
// import { useDebounce } from 'use-debounce';
// import { updateSearchCount } from './Appwrite.js';


// function Gernal() {

// const [SearchTerm, setSearchTerm] = useState('');
// const [loading, setLoading] = useState(false);
// const [movies, setMovies] = useState([]);
// const [error, setError] = useState('');
// const [debouncedSearchTerm] = useDebounce(SearchTerm, 500);

// // Only fetch movies after debounce
// useEffect(() => {
//   fecthMovies(debouncedSearchTerm);
// }, [debouncedSearchTerm]);


//     // Debounce the search term input to limit API calls
//     // Wait for 500ms after the user stops typing to update the debounced search term
//     // This helps to reduce the number of API requests made while the user is typing
//     const BASE_URL = 'https://api.themoviedb.org/3';

//     const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    
//     const API_OPTIONS={
//     method: 'GET',
//     headers: {
//     accept: 'application/json',
//     Authorization: `Bearer ${API_KEY}`
//     }
//     };
//     // console.log("API Key:", API_KEY);

//     const fecthMovies = async (query ='') => {
//     setLoading(true)  ;
//     setError('');
//     try {

//     const endpoint =query
//     ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
//     :
//     `${BASE_URL}/discover/movie?sort_by=popularity.desc`;
//     const response = await fetch(endpoint, API_OPTIONS);
//     if (!response.ok) {
//     throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log(data);
//     if (data.response === 'False') {
//     setError(data.error || 'An error occurred while fetching movies.');
//     setMovies([]);
//     return
//     }
//     setMovies(data.results|| []  );
//     // updateSearchCount();

//     if (query && data.results.length > 0) {
//     await updateSearchCount(query, data.results[0]);
//     }

//     }
//     catch (error) {
//     console.error("Error fetching movies:", error);
//     setError('Failed to fetch movies. Please try again later.');
//     }
//     finally {
//     setLoading(false);
//     }

//     }
//     useEffect(() => {
//     fecthMovies(SearchTerm);
//     }

//     , [SearchTerm])


//     return (
//     <main >


//     <div className="pattern" />
//     <div className='wrapper'  >
//     <header>
//     <img src="./hero-img.png" alt="Banner image" />

//     <h1>Find   <span className='text-gradient'>Movies </span> You'll Enjoy      Without          the  Hassle   </h1>
//     <Search  SearchTerm={SearchTerm}  setSearchTerm={setSearchTerm}/>
//     </header>

//     </div>

//     <section className='all-movies'>
//     <h2 className='mt-[20px] ml-[30px]'>All Movies</h2>

//     {loading ? (<Spinner/>) :
//     error ? (<p className="text-red-500">{error}</p>) :
//     (<ul>
//     {movies.map((movie) => (

//     <MovieCard key={movie.id} movie={movie} />

//     ))

//     }
//     </ul>

//     )


//     }
//     {error && <p className="text-red-500">{error}</p>}
//     </section>




//     </main>  )
// }

// export default Gernal


















// import { useState, useEffect } from "react";
// import "./App.css";
// import Search from "./components/Search.jsx";
// import Spinner from "./components/Spinner.jsx";
// import MovieCard from "./components/MovieCard.jsx";
// import { useDebounce } from "use-debounce";
// import { updateSearchCount } from "./Appwrite.js";

// function Gernal() {
//   const [SearchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState("");
//   const [likedMovies, setLikedMovies] = useState([]); // ✅ NEW STATE

//   const [debouncedSearchTerm] = useDebounce(SearchTerm, 500);

//   const BASE_URL = "https://api.themoviedb.org/3";
//   const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

//   const API_OPTIONS = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };

//   const fetchMovies = async (query = "") => {
//     setLoading(true);
//     setError("");
//     try {
//       const endpoint = query
//         ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
//         : `${BASE_URL}/discover/movie?sort_by=popularity.desc`;
//       const response = await fetch(endpoint, API_OPTIONS);
//       if (!response.ok) throw new Error("Network response was not ok");

//       const data = await response.json();
//       if (data.response === "False") {
//         setError(data.error || "An error occurred while fetching movies.");
//         setMovies([]);
//         return;
//       }

//       setMovies(data.results || []);

//       if (query && data.results.length > 0) {
//         await updateSearchCount(query, data.results[0]);
//       }
//     } catch (error) {
//       console.error("Error fetching movies:", error);
//       setError("Failed to fetch movies. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMovies(debouncedSearchTerm);
//   }, [debouncedSearchTerm]);

//   // ✅ Like toggle function
//   const handleToggleLike = (movie) => {
//     setLikedMovies((prev) => {
//       if (prev.includes(movie.id)) {
//         return prev.filter((id) => id !== movie.id);
//       } else {
//         return [...prev, movie.id];
//       }
//     });
//   };

//   return (
//     <main>
//       <div className="pattern" />
//       <div className="wrapper">
//         <header>
//           <img src="./hero-img.png" alt="Banner image" />
//           <h1>
//             Find <span className="text-gradient">Movies</span> You'll Enjoy
//             Without the Hassle
//           </h1>
//           <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm} />
//         </header>
//       </div>

//       <section className="all-movies">
//         <h2 className="mt-[20px] ml-[30px]">All Movies</h2>

//         {loading ? (
//           <Spinner />
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : (
//           <ul>
//             {movies.map((movie) => (
//               <MovieCard
//                 key={movie.id}
//                 movie={movie}
//                 isLiked={likedMovies.includes(movie.id)} // ✅
//                 onToggleLike={handleToggleLike} // ✅
//               />
//             ))}
//           </ul>
//         )}
//       </section>
//     </main>
//   );
// }

// export default Gernal;






import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
import { useDebounce } from "use-debounce";
import { updateSearchCount } from "./Appwrite.js";

function Gernal() {
  const [SearchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [likedMovies, setLikedMovies] = useState([]); // ❤️ Track liked movie IDs

  const [debouncedSearchTerm] = useDebounce(SearchTerm, 500);
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  // 🔹 Fetch Movies
  const fetchMovies = async (query = "") => {
    setLoading(true);
    setError("");
    try {
      const endpoint = query
        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (data.response === "False") {
        setError(data.error || "An error occurred while fetching movies.");
        setMovies([]);
        return;
      }

      setMovies(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  // 🔹 Load liked movies from localStorage on first load
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setLikedMovies(stored.map((m) => m.id));
  }, []);

  // 🔹 Handle like / unlike
  const handleToggleLike = (movie) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = storedFavorites.some((fav) => fav.id === movie.id);

    let updatedFavorites;

    if (exists) {
      updatedFavorites = storedFavorites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFavorites = [...storedFavorites, movie];
    }

    // Update both localStorage and local state
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setLikedMovies(updatedFavorites.map((fav) => fav.id));
  };

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search SearchTerm={SearchTerm} setSearchTerm={setSearchTerm} />
        </header>
      </div>

      <section className="all-movies">
        <h2 className="mt-[20px] ml-[30px]">All Movies</h2>

        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <ul>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isLiked={likedMovies.includes(movie.id)}
                onToggleLike={handleToggleLike}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Gernal;
