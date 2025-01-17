import { Row, Col } from 'react-bootstrap';
import AdminArea from "./AdminArea";

const Consigliati = () =>{
    return (
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={4} className="text-center">
              <h2 className='text-center mb-4'>Consigliati</h2>
              <AdminArea cityName="Rome" countryCode="IT" />
              <AdminArea cityName="London" countryCode="GB" />
              <AdminArea cityName="Berlin" countryCode="DE" />
            </Col>
          </Row>
    )
}

export default Consigliati;