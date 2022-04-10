import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
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
            <Movie
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
