import { useEffect, useState } from "react";

function App() {
  const [isLoading, setLoadingState] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );
    const json = await response.json();
    setMovieList(json.data.movies);
    setLoadingState(false);
  };
  console.log(movieList);
  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movieList.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
