import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import Loading from "./Loading";
import Error from "./Error";

const CityDetails = () => {
  const [details, setDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const APIkey= "8aa50b66fc248e1a8f32db23d1389119"

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=`+params.cityID+`&appid=${APIkey}`);
        if (response.ok) {
          let weatherData = await response.json();
          console.log(weatherData);
          setDetails(weatherData);
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
  }, [params.cityID]);

  return (
    <>
    <h1 className="my-3 text-center">Weather</h1>
    <div className="d-flex justify-content-center text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`}
          alt={details.weather[0].description}
          style={{ width: "100px", height: "100px", margin: "0 auto" }}
          />
        <Card.Body>
          <Card.Title>{details.name} - {details.sys.country}</Card.Title>
          <Card.Text>{details.weather[0].main} - {details.weather[0].description}</Card.Text>
          <Card.Text>Max: {(details.main.temp_max - 273.15).toFixed(2)}°C - Min: {(details.main.temp_min - 273.15).toFixed(2)}°C</Card.Text>
          <Card.Text>Humidity: {details.main.humidity}%</Card.Text>
          <Card.Text>VWind: {details.wind.speed} mph</Card.Text>
          <Button variant="info" className="text-white" onClick={() => {
                  navigate('/')
                }}>Go Home</Button>
        </Card.Body>
      </Card>
      )}
    </div>
    </>
  );
};

export default CityDetails;
