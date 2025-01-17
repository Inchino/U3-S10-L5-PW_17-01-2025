import { Row, Col, Image } from "react-bootstrap";

const SingleCard = ({ city }) => {
  return (
    <Row className="justify-content-center mt-4">
      <Col xs={4} className="text-center">
        <Image
          src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt={city.weather[0].description}
        />
        <p>{(city.main.temp - 273.15).toFixed(2)} °C</p>
      </Col>
      <Col xs={8} className="d-flex align-items-center justify-content-center">
        <h3 className="city-name">{city.name}</h3>
      </Col>
    </Row>
  );
};

export default SingleCard;
