import { Container, Row, Col, Carousel, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Header.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


function Home() {
  return (
<>
<Header />
<Container >

      <section className='home'>
        <div className='content'>

        </div>
      </section>
<div className='main'>
<Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  height={550}
                  src="/src/images/examFake.jpg"
                  alt="First slide"
                />
                <Carousel.Caption className='homeİmageContainer'>
                  <h3 className='homeİmageHeader'>Güvenebileceğiniz sonuçlar</h3>
                  <p className='homeİmageDescription'>Ekibimiz tarafından hazırlanan  CoreQuiz uzun bir çalışma sonucu tamamlanmıştır.</p> 
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                                  height={550}
                  className="d-block w-100"
                  src="/src/images/english.png"
                  alt="Second slide"
                />
                <Carousel.Caption className='homeİmageContainer'>
                  <h3 className='homeİmageHeader'>Ücretsiz</h3>
                  <p className='homeİmageDescription'>Güvenilebilir sonuçlar için ücret ödemenize gerek yok!</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      <CardGroup>
        <Card>
          <img alt="CCNA" src="/src/images/ccna.jfif" />
          <CardBody>
            <CardTitle tag="h5"> CCNA Belgesi </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6"> Card Subtitle </CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum, porro pariatur repellat laudantium distinctio non ipsum praesentium possimus aliquid.
            </CardText>
            <Button>Sınava Git</Button>
          </CardBody>
        </Card>

        <Card>
          <img alt="istqb" src="/src/images/istqb.jpg" />
          <CardBody>
            <CardTitle tag="h5"> ISTQB Belgesi </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum, porro pariatur repellat laudantium distinctio non ipsum praesentium possimus aliquid.
            </CardText>
            <Button>Sınava Git</Button>
          </CardBody>
        </Card>
      </CardGroup>
</div>
</Container>
<Row>
        <Footer></Footer>
      </Row>
</>
  );
}

export default Home;