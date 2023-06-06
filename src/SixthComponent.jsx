import { useState, useEffect } from "react";
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/movies") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              title: "The Godfather",
              year: 1972,
              genre: "Crime"
            },
            {
              title: "The Shawshank Redemption",
              year: 1994,
              genre: "Drama"
            },
            {
              title: "The Dark Knight",
              year: 2008,
              genre: "Action"
            },
            {
              title: "Forrest Gump",
              year: 1994,
              genre: "Comedy"
            },
            {
              title: "The Matrix",
              year: 1999,
              genre: "Science Fiction"
            },
            {
              title: "Jurassic Park",
              year: 1993,
              genre: "Science Fiction"
            },
            {
              title: "Star Wars: Episode IV - A New Hope",
              year: 1977,
              genre: "Science Fiction"
            },
            {
              title: "The Terminator",
              year: 1984,
              genre: "Action"
            },
            {
              title: "Die Hard",
              year: 1988,
              genre: "Action"
            },
            {
              title: "Pulp Fiction",
              year: 1994,
              genre: "Crime"
            }
          ]
        });
      } else {
        reject({
          status: 404,
          message: "Movies list not found."
        });
      }
    }, 2000);
  });
};

const SixthComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const [genreFilter, setGenreFilter] = useState("all");
  const url = "https://example.com/api/movies";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data);
    };
    innerFunction();
  }, []);
  const handleClick = (e) => {
    setGenreFilter(e.target.value);
  };
  const filteredMovies =
    genreFilter === "all"
      ? usersData
      : usersData.filter((movie) => movie.genre === genreFilter);

  return (
    <>
      <h1>Movies</h1>
      <label htmlFor="genres"></label>
      <select name="genres" onChange={handleClick}>
        <option value="all">All genres</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>
      <ul>
        {filteredMovies.map(({ title, year, genre }) => {
          return (
            <>
              <li>
                <p>{title}</p>
                <p>{year}</p>
                <p>{genre}</p>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default SixthComponent;
