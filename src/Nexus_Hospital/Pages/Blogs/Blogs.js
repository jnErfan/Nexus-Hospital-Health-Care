import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="container blogContainer" id="ourblog">
            <div  data-aos="flip-right" data-aos-duration="1000" className="">
                <h1 className="ourBlog mb-5">Our Blogs</h1>
            </div>
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
<div className="blogHospital">
<Row xs={1} md={2} lg={2} className="g-4">
            
            <Col>
            <Card data-aos="flip-left" data-aos-duration="1000" className="border-0 shadow-sm p-3 rounded-3">
                <Card.Img variant="top" src="https://nexuscontinuum.com/wp-content/uploads/2021/10/AdobeStock_190254484.jpg" />
                <Card.Body>
                <Card.Title>POST-COVID PEDIATRIC RESPIRATORY SERVICES</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                While pediatric COVID-19 infections tend to present less severe symptoms than adults, there is still sometimes a need for pediatric respiratory services and pulmonary care during and after a COVID-19 case. For children who are chronically ill, physically fragile, or traumatically injured.
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            
            
            <Col>
            <Card data-aos="flip-left" data-aos-duration="1000" className="border-0 shadow-sm p-3 rounded-3">
                <Card.Img variant="top" height="250px" src="https://nexuscontinuum.com/wp-content/uploads/2021/03/Screen-Shot-2021-02-19-at-3.59.42-PM.jpg" />
                <Card.Body>
                <Card.Title>SPEAKING UP FOR PATIENT SAFETY.</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                Feeling safe is an important foundation for everyone in a new environment, especially patients and residents recovering from a life-changing injury or illness. To feel their best and do their best, these individuals must feel secure — and we take their trust in us very seriously.
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            
            
            <Col>
            <Card data-aos="flip-left" data-aos-duration="1000" className="border-0 shadow-sm p-3 rounded-3">
                <Card.Img variant="top" src="https://nexuscontinuum.com/wp-content/uploads/2021/01/Nexus-Still-Request-09.jpg" />
                <Card.Body>
                <Card.Title>NEXUS HEALTH SYSTEMS  MEDICINE PHYSICIAN  REHABILITATION SERVICES</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                Nexus Health Systems welcomes Zoraya Parrilla, MD to the team as a rehabilitation medicine physician. Dr. Parrilla will serve as the medical director of Nexus Specialty Hospital’s Inpatient Rehabilitation Unit (IRU) as well as an attending physical
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            
            <Col>
            <Card data-aos="flip-left" data-aos-duration="1000" className="border-0 shadow-sm p-3 rounded-3">
                <Card.Img variant="top" src="https://nexuscontinuum.com/wp-content/uploads/2020/08/Copy_of_Blog_Post_Image_2_400x200.png" />
                <Card.Body>
                <Card.Title>THE PSYCHOPHARMACOLOGY OF BRAIN INJURIES</Card.Title>
                <Card.Text>
                <small className="text-secondary">
                Our personalities are intrinsically tied to our brains – that is, until a brain injury occurs and disrupts the sense of self that is so unique to every person and defines who we are.Our personalities are intrinsically tied to our brains – that is, until a brain injury occurs and disrupts the sense of self that is so unique to every person..
                </small>
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>

</Row>
</div>
<div className="blogHospital">
<Row xs={1} md={2} lg={2} className="g-4">
          
          <Col>
          <Card data-aos="flip-right"  data-aos-duration="1000" className="border-0 shadow-lg p-3 rounded-3">
              <Card.Body>
              <Card.Title> Boston Children's Hospital </Card.Title>
              <Card.Text>
              <small className="text-secondary">
              "Thriving" is primarily filled with engaging stories about patients and their paths to care, but also includes salient medical advice and practical tips. 
              </small>
              </Card.Text>
              </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card data-aos="flip-right"  data-aos-duration="1000"  className="border-0 shadow-lg p-3 rounded-3">
              <Card.Body>
              <Card.Title> Overlake Medical Center </Card.Title>
              <Card.Text>
              <small className="text-secondary">
              Dedicated to mothers and infants, the Overlake Medical Center blog explores everything parents need to know about raising a newborn: food choices, sleeping advice, choosing a pediatrician, the works. 
              </small>
              </Card.Text>
              </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card data-aos="flip-right"  data-aos-duration="1000"  className="border-0 shadow-lg p-3 rounded-3">
              <Card.Body>
              <Card.Title> Seattle Children's Hospital </Card.Title>
              <Card.Text>
              <small className="text-secondary">
              One of the few quality teen-specific blogs around, "Teenology101" offers helpful information and health advice on everything related to the difficult, often confusing in-between ages. 
              </small>
              </Card.Text>
              </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card data-aos="flip-right"  data-aos-duration="1000"  className="border-0 shadow-lg p-3 rounded-3">
              <Card.Body>
              <Card.Title>The Brigham and Women's Hospital</Card.Title>
              <Card.Text>
              <small className="text-secondary">
              Equal parts education and inspiring, "HealthHub" not only chronicles the goings-on at Brigham and Women’s, but frequently delves into innovative research and offers helpful, explanatory advice. 
              </small>
              </Card.Text>
              </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card data-aos="flip-right"  data-aos-duration="1000"  className="border-0 shadow-lg p-3 rounded-3">
              <Card.Body>
              <Card.Title> Crozer-Keystone Health Care Clinic</Card.Title>
              <Card.Text>
              <small className="text-secondary">
              The official blog of the Crozer-Keystone Health System, "Healthbeat" gives helpful, up-to-date coverage on wellness tips, engagement with the local community, family advice, and general medical topics. 
              </small>
              </Card.Text>
              </Card.Body>
          </Card>
          </Col>
          
          <Col>
          <Card  data-aos="flip-right"  data-aos-duration="1000" className="border-0 shadow-lg p-3 rounded-3">
              <Card.Body>
              <Card.Title> Jefferson Unviersity Hospitals </Card.Title>
              <Card.Text>
              <small className="text-secondary">
              A valuable resource center for a wide range of health-related topics, Philadelphia residents depend on @Jeff for expert advice and the latest medical news in order to keep themselves and their loved ones healthy.  
              </small>
              </Card.Text>
              </Card.Body>
          </Card>
          </Col>
          
          
          <Col>
          <Card  data-aos="flip-right"  data-aos-duration="1000" className="border-0 shadow-lg p-3 rounded-3">
              <Card.Body>
              <Card.Title> Indiana University Health </Card.Title>
              <Card.Text>
              <small className="text-secondary">
              Their “Strength” blog is a wonderful and thorough all-purpose blog, with entries relating to medical innovations, their long list of service lines including cancer, neuroscience, ENT and morewellness, and community news.  
              </small>
              </Card.Text>
              </Card.Body>
          </Card>
          </Col>
          
          <Col>
          <Card  data-aos="flip-right"  data-aos-duration="1000" className="border-0 shadow-lg p-3 rounded-3">
              <Card.Body>
              <Card.Title> Jefferson Unviersity Hospitals </Card.Title>
              <Card.Text>
              <small className="text-secondary">
              A valuable resource center for a wide range of health-related topics, Philadelphia residents depend on @Jeff for expert advice and the latest medical news in order to keep themselves and their loved ones healthy.  
              </small>
              </Card.Text>
              </Card.Body>
          </Card>
          </Col>

      </Row>
    </div>
</div>
    );
};

export default Blogs;