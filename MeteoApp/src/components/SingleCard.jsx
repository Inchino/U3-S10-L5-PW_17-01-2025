import { Row, Col } from 'react-bootstrap';

const SingleCard = ({city}) =>{
    return (
          <Row className="justify-content-center mt-4">
            <Col xs={4} className="text-center">
            <i>{city.weather.icon}</i> 
            <p>{city.main.temp}</p>
            </Col>
            <Col xs={8}>{city.name}</Col>
          </Row>
    )
}

export default SingleCard;