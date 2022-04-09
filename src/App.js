import { useEffect, useState } from "react";

function App() {
  const [isLoading, setLoadingState] = useState(true);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => setMovieList(json.data.movies))
      .then(setLoadingState(false));
  }, []);
  console.log(movieList);
  return (
    <div>
      <h1>Mooflix</h1>
      {isLoading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <p>asdfasdf</p>
        </div>
      )}
    </div>
  );
}

export default App;
