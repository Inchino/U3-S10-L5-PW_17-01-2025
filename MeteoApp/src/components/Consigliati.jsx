import { Row, Col } from 'react-bootstrap';
import SingleCard from './SingleCard';

const Consigliati = () =>{
    return (
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={4} className="text-center">
              <h4 className='text-center mb-4'>Consigliati</h4>
              <SingleCard/>
              <SingleCard/>
              <SingleCard/>
            </Col>
          </Row>
    )
}

export default Consigliati;