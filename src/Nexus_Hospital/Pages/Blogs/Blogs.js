import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="container blogContainer">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
     <div className="carousel-indicators sliderBtn">
       
        <button  className="bg-primary active" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true"></button>
        
        <button  className="bg-primary" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>

        <button className="bg-primary"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
        
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      
        <Row xs={1} md={2} lg={2} className="g-4">
            <Col className="border-0">
            <Card className="border-0">
                <Card.Img variant="top" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/Blog-6.jpg" />
                <Card.Body>
                <Card.Title>Bumps In The Back Of The Throat</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                The bumps are caused by enlarged lymphatic tissue in the tonsils and adenoids, which are pockets of tissue in the back of your throat.
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="border-0">
                <Card.Img variant="top" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/Blog-1.jpg" />
                <Card.Body>
                <Card.Title>How your brain senses an itch </Card.Title>
                <Card.Text>
                <small className="text-secondary">
                Light touch plays a critical role in everyday tasks, such as picking up a glass or playing a musical instrument. The sensation is also.
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>

    </div>
    <div className="carousel-item">
      
    <Row xs={1} md={2} lg={2} className="g-4">
            <Col>
            <Card  className="border-0">
                <Card.Img variant="top" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/Blog-5.jpg" />
                <Card.Body>
                <Card.Title>Is 5G technology bad for our health?</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                There are many paths to capturing 5G opportunities, which one will you take? By adopting a step-wise and customized you can design.
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="border-0">
                <Card.Img variant="top" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/Blog-2.jpg" />
                <Card.Body>
                <Card.Title>Can fingering lead to pregnancy?</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                Fingering on its own can't lead to pregnancy. But it is possible to get pregnant if a guy gets  or ejaculate on his finger and then puts
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>

    </div>
    <div className="carousel-item">
      
    <Row xs={1} md={2} lg={2} className="g-4">
            <Col>
            <Card className="border-0">
                <Card.Img variant="top" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/Blog-3.jpg" />
                <Card.Body>
                <Card.Title>Stop Or Reduce A Stutter</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                Stuttering is a speech disorder. People who stutter may repeat sounds, syllables, or words, or they may prolong sounds. There may also be interruptions.
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card className="border-0">
                <Card.Img variant="top" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/Blog-4.jpg" />
                <Card.Body>
                <Card.Title>Curiosities Of Medical History</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                their search for better ways of curing the human body, healers throughout history have tried some bizarre and, by modern standards, often disturbing.
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>

    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;