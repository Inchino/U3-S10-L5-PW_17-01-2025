import { Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ city }) => {
  const navigate = useNavigate(); // Hook per la navigazione

  return (
    <Row className="justify-content-center mt-4 border">
      <Col xs={4} className="text-center">
        <Image
          src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt={city.weather[0].description}
        />
        <p>{(city.main.temp - 273.15).toFixed(2)} °C</p>
      </Col>
      <Col xs={5} className="d-flex align-items-center justify-content-center">
        <h3>{city.name}</h3>
        <p>{city.sys.country}</p>
      </Col>
      <Col xs={3} className="d-flex align-items-center justify-content-center">
        <Button
          variant="info"
          className="text-white"
          onClick={() => navigate('/city-details/' + city.id)} // Navigazione
        >
          More Info
        </Button>
      </Col>
    </Row>
  );
};

export default SingleCard;

