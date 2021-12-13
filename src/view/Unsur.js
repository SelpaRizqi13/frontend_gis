import React from "react";
import Logo from '../image/isbilogo.png'
import budaya from '../image/budaya.jpg'
// reactstrap components
import { 
  
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Card, CardImgOverlay, CardTitle, CardText, CardImg,
  Container, 
  UncontrolledCarousel,
  Row,
  Col,
  CardBody,
  CardSubtitle,
  Button} from "reactstrap";
  import {useNavigate} from 'react-router-dom'
  
const carouselItems = [
  {
    src:
    'https://picsum.photos/id/123/1200/600',
    altText: "Slide 1",
    caption: ""
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925837%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925837%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.45%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2",
    caption: ""
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925838%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925838%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.45%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: ""
  }
];


function Carousel(){
  const navigate = useNavigate();
  return (
    <Container>
    <Navbar className="fixed-top navbar-light bg-light">
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            <div>
              <h6>
              <img src={Logo} width="80" height="80"/> Institut Seni Budaya Indonesia
              </h6>
            </div>
            
          </NavbarBrand>
    </Navbar>
      <UncontrolledCarousel items={carouselItems} />
      <Row xs="5" className='mt-5'>
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
          
          
    
  </Row>
    </Container>
  );
}

export default Carousel;