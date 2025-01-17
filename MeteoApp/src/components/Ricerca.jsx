import { Col, Form, Row } from 'react-bootstrap';

const Ricerca = () =>{
    return (
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={4} className="text-center">
            <h1 className='mb-3'>Meteo</h1>
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca un luogo"
                  //value={searchQuery}
                  //onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
    )
}

export default Ricerca;