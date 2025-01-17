import { Row, Col, Image } from 'react-bootstrap';

const SingleCard = () =>{
    return (
          <Row className="justify-content-center mt-4">
            <Col xs={4} className="text-center">
            <Image/> 
            <p>gradi</p>
            </Col>
            <Col xs={8}> Nome città cercata</Col>
          </Row>
    )
}

export default SingleCard;