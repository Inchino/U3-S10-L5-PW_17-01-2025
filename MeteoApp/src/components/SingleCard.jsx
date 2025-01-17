import { Row, Col, Image } from "react-bootstrap";
import {Link} from "react-router-dom";

const SingleCard = ({ city }) => {
  return (
    <Link to={"/city-details/" + city.id} style={{ textDecoration: "none", color: "inherit" }}>
    <Row className="justify-content-center mt-4 border">
      <Col xs={4} className="text-center">
        <Image
          src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt={city.weather[0].description}
        />
        <p>{(city.main.temp - 273.15).toFixed(2)} °C</p>
      </Col>
      <Col xs={8} className="d-flex align-items-center justify-content-center">
        <h3>{city.name}</h3>
        <p>{city.sys.country}</p>
      </Col>
    </Row>
    </Link>
  );
};

export default SingleCard;
