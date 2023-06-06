import { useState, useEffect } from "react";
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/movies") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { title: "The Dark Knight", year: 2008, rating: 9.0 },
            { title: "Inception", year: 2009, rating: 8.8 },
            { title: "Interstellar", year: 2010, rating: 8.6 },
            { title: "Tenet", year: 2009, rating: 7.5 },
            { title: "Real Steal", year: 2007, rating: 7.5 }
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

const ThirdComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const [yearFilter, setYearFilter] = useState("all");
  const url = "https://example.com/api/movies";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data);
    };
    innerFunction();
  }, []);

  const handleOnChange = (e) => {
    const year = e.target.value;
    setYearFilter(year);
  };
  const filteredMovies =
    yearFilter === "all"
      ? usersData
      : usersData.filter((item) => item.year.toString() === yearFilter);

  return (
    <>
      <h1>Movies</h1>
      <label htmlFor="year">Select year</label>
      <select name="year" onChange={handleOnChange}>
        <option value="all">all</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
      </select>
      <ul>
        {filteredMovies.map(({ title, year, rating }) => {
          return (
            <>
              <p>Name: {title}</p>
              <p>Year: {year}</p>
              <p>Ratings: {rating}</p>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default ThirdComponent;
