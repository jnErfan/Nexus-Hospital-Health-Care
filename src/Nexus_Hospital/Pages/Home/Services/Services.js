import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Services.css";

// Aos Initialize
Aos.init();

const Services = () => {

const [services, setServices] = useState([]);

useEffect(() => {
    fetch('https://raw.githubusercontent.com/jnErfan/Fake-Data/main/servicesData.json')
    .then(res => res.json())
    .then(data => setServices(data))
},[])
console.log();
    return (
        <div className="container serviceContainer" id="servicesid">
            <div  data-aos="flip-right" className="">
                <h1 className="ourServices mb-5">Our Services</h1>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">

                {
                    services.map(service => 
            <Col data-aos="flip-right" data-aos-duration="1000" className="my-3 mt-5" key={service.id}>
                         <Card className="serviceCard">
                        <Card.Img variant="top" height="225px" src={service.displayImg} />
                        <Card.Body>
                        <Card.Title>{service.serviceName}</Card.Title>
                        <Card.Text>
                            <small className="text-secondary">{service.serviceDetail} </small>
                        </Card.Text>
                            <p className="text-secondary"> Specialist: <br /> <span className="text-dark"> {service.specialist}</span> </p>
                            <p className=""><small className="text-secondary"> {service.degree} </small></p>
                             <HashLink to={`service/${service.id}/#serviceDetails`} ><Button className="detailsButton">See Details</Button></HashLink>

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