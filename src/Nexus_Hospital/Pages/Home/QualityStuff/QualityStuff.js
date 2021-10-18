import "./QualityStuff.css"
import React from 'react';
import { Card, Col, Row } from "react-bootstrap";

const QualityStuff = () => {
    return (
<div className="container">
             <div className="">
                <h1 className="QualityStuff mb-5">QUALITY STUFF</h1>
             </div>
<div>

<Row xs={1} md={2} lg={4} className="g-4">
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top stuffImage" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/team1.jpg" />
                    <Card.Body>
                    <Card.Title>Laura Kean</Card.Title>
                    <Card.Text>
                    Specialty-trained Pharmacist
                    </Card.Text>
                    </Card.Body>
                </Card>
             </Col>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top stuffImage" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/team2.jpg" />
                    <Card.Body>
                    <Card.Title>Norman Colins</Card.Title>
                    <Card.Text>
                    General Pr actitioner
                    </Card.Text>
                    </Card.Body>
                </Card>
             </Col>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top stuffImage" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/team4.jpg" />
                    <Card.Body>
                    <Card.Title>James Orion</Card.Title>
                    <Card.Text>
                    Internist, Orthopedic Surgeons
                    </Card.Text>
                    </Card.Body>
                </Card>
             </Col>
            <Col>
                <Card className="border-0">
                    <Card.Img variant="top stuffImage" src="https://macy.7uptheme.net/wp-content/uploads/2019/09/team3.jpg" />
                    <Card.Body>
                    <Card.Title>Harry Poterson</Card.Title>
                    <Card.Text>
                    Surgeon, Сardiologist
                    </Card.Text>
                    </Card.Body>
                </Card>
             </Col>
</Row>
           </div>
        </div>
    );
};

export default QualityStuff;