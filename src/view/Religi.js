import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle,  Col, Container, Row } from 'reactstrap';
import {useNavigate} from 'react-router-dom'
import budaya from '../image/budaya.jpg'

export default (props) => {
  const navigate = useNavigate();
    return (
    <Container>
       <Row>
    <Col className="bg-light border">
    <card>
    <CardImg
                alt="Card image cap"
                src={budaya}
                top
                width="100%"
                height={500}
              />
    </card>
    </Col>
  </Row>
    <Row xs="3" className='mt-5'>
      <Col className="bg-light border">
          <div>
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://picsum.photos/256/186"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Card title
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <Button  onClick={() => navigate('/deskripsi')}>
                  Button
                </Button>
              </CardBody>
            </Card>
          </div>
    </Col>
    <Col className="bg-light border">
      Column
    </Col>
    <Col className="bg-light border">
      Column
    </Col>
    
  </Row>
      </Container>
    );
  };
