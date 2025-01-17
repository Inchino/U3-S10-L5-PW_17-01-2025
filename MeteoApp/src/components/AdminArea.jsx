import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import SingleCard from "./SingleCard"

const AdminArea = ({ cityName, countryCode }) => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const APIkey= "8aa50b66fc248e1a8f32db23d1389119"

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${APIkey}`);
        if (response.ok) {
          let weatherData = await response.json();
          console.log(weatherData);
          setWeather(weatherData);
          setIsLoading(false);
          setIsError(false);
        } else {
          console.error(`HTTP error: ${response.status}`);
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.error("Network error:", error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <SingleCard city={weather}/>
      )}
    </div>
  );
};

export default AdminArea;
