import { useState, useEffect } from "react";
const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/weather") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            temperature: 21,
            humidity: 50,
            windSpeed: 10
          }
        });
      } else {
        reject({
          status: 404,
          message: "Weather data not found."
        });
      }
    }, 2000);
  });
};

const FirstComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const url = "https://example.com/api/weather";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data);
    };
    innerFunction();
  }, []);
  const handleClick = () => {
    setUsersData((prev) => ({ ...prev, temperature: 69.8 }));
  };

  return (
    <>
      <h1>Weather</h1>
      <p>Temprature:{usersData.temperature}°C</p>
      <p>Humidity:{usersData.humidity} %</p>
      <p>Wind Speed:{usersData.windSpeed} km/h</p>
      <button onClick={handleClick}>Switch to Farhenheit</button>
    </>
  );
};
export default FirstComponent;
