import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import "./Services.css";

const Services = () => {

const [services, setServices] = useState([]);

useEffect(() => {
    fetch('servicesData.json')
    .then(res => res.json())
    .then(data => setServices(data))
},[])
console.log();
    return (
        <div className="container serviceContainer">
            <div className="">
                <h1 className="ourServices mb-5">Our Services</h1>
            </div>
            <Row xs={1} md={2} lg={3} className="g-5">

                {
                    services.map(service => 
            <Col className="my-3 mt-5" key={service.id}>
                         <Card className="serviceCard">
                        <Card.Img variant="top" height="225px" src={service.displayImg} />
                        <Card.Body>
                        <Card.Title>{service.serviceName}</Card.Title>
                        <Card.Text>
                            <small className="text-secondary">{service.serviceDetail} </small>
                        </Card.Text>
                            <p className="text-secondary"> Specialist: <br /> <span className="text-dark"> {service.specialist}</span> </p>
                            <p className=""><small className="text-secondary"> {service.degree} </small></p>

                            <Button className="detailsButton">See Details</Button>

                        </Card.Body>
                        </Card>
            </Col>
                )
                }
</Row>

<div className="bg-dark mt-5 mb-5"><hr /></div>

        </div>
    );
};

export default Services;