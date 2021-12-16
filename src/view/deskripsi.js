import React from "react";
import Logo from '../image/isbilogo.png'
import { 
  
    NavbarBrand,
    Navbar,
    Card, 
    CardImgOverlay, 
    CardTitle, 
    CardText, 
    CardImg,
    Row,
    Col,
    Container,
    UncontrolledCarousel} from "reactstrap";
import {useNavigate} from 'react-router-dom'


const carouselItems = [
    {
      src:
      'https://picsum.photos/id/123/1200/600',
      
    },
    
  ];
export default (props) => {
    return (
        <Container>
        <div>
            <Navbar className="navbar bg-light ">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    <div>
                    <h6>
                    <img src={Logo} width="80" height="80"/> Institut Seni Budaya Indonesia
                    </h6>
                    </div>
                    
                </NavbarBrand>
            </Navbar>
        </div>
      <UncontrolledCarousel items={carouselItems} />
            <Row>
            <Col className="bg-white ">
                <Col className="bg-light">
                <h3>Judul</h3>
                </Col>
                <Col>
                <h1>Judul</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </Col>
            </Col>
            </Row>
        </Container>
    );
}