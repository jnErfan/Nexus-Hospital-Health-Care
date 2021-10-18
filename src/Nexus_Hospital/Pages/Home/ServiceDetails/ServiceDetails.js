import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import "./ServiceDetails.css";

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceDetails , setServiceDetails] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/jnErfan/Restaurant-Foods-Data/main/servicesData.json")
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[])

    const serviceDetail = serviceDetails.filter(service => service.id === serviceId);
    const service = serviceDetail?.[0];
    return (
<div className="container detailsContainer">
 <div className="row row-cols-2">
          
      <div data-aos="flip-up" data-aos-duration="2000" className="col col-12 col-md-6 col-lg-6">
                <div>
                    <h1 className="text-start serviceName">
                    {service?.serviceName}
                    </h1>
                    <p className="text-start text-secondary discription">
                   {service?.discription}
                    </p>
                    
                    <div className="text-start mt-5 shadow-sm rounded-3 specialistContainer p-4">
                    <h4 className="doctor">Specialist:</h4>
                        {
                            service?.gender === "Male" ?
                            <img width="100px" src="https://www.doctorbangladesh.com/wp-content/uploads/dr-male-75x85.jpg" alt="" />
                            :
                            <img width="100px" src="https://www.doctorbangladesh.com/wp-content/uploads/dr-female-75x85.jpg" alt="" />
                        }
                    
                    <h3 className="specialist me-4 mt-3">
                    {service?.specialist}
                    </h3>
                    <p className="mb-0">{service?.gender}</p>
                    <p className="text-secondary">{service?.degree}</p>
                    
                    </div>
                </div>
       </div>

   <div data-aos="flip-right" data-aos-duration="2000" className="col col-12 col-md-6 col-lg-6">
           
           <img className="w-100 rounded-3 mt-5" src={service?.displayImg} alt="" />

    </div>
 </div>

 <button onClick={()=> history.push("/services")} className="btn btn-outline-info px-5 py-3 fw-bold mt-5">Back To Services</button>
 </div>
    );
};

export default ServiceDetails;